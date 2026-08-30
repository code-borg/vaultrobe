import { clock, effect, frameLoop, init, surface } from "vgpu";
import type { Frame, FrameLoopHandle, Gpu } from "vgpu";
import silkShader from "@/shaders/silk.wgsl";

export type SilkTheme = "dark" | "light";

export interface SilkGpuOptions {
  canvas: HTMLCanvasElement;
  getTheme: () => SilkTheme;
  animate?: boolean;
  onReady?: () => void;
}

/**
 * Starts a vgpu silk effect on `canvas`. Call the returned function to
 * stop the loop and dispose the GPU device.
 */
export function startSilk(options: SilkGpuOptions): () => void {
  const { canvas, getTheme, animate = true, onReady } = options;

  let disposed = false;
  let loop: FrameLoopHandle | undefined;
  let gpu: Gpu | undefined;
  let unsubResize: (() => void) | undefined;
  let unsubPointer: (() => void) | undefined;

  const pointer = { x: 0.62, y: 0.32 };
  const pointerTarget = { x: 0.62, y: 0.32 };
  let inView = true;

  const onPointerMove = (event: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    pointerTarget.x = (event.clientX - rect.left) / rect.width;
    pointerTarget.y = (event.clientY - rect.top) / rect.height;
  };

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  unsubPointer = () => window.removeEventListener("pointermove", onPointerMove);

  const observer = new IntersectionObserver(
    ([entry]) => {
      inView = entry?.isIntersecting ?? true;
    },
    { threshold: 0.05 }
  );
  observer.observe(canvas);

  void (async () => {
    try {
      gpu = await init({ powerPreference: "low-power", label: "vaultrobe-silk" });
      if (disposed) {
        gpu.dispose();
        return;
      }

      const canvasSurface = surface(gpu, canvas, { dpr: [1, 2] });
      const silk = effect(gpu, silkShader, {
        label: "vaultrobe-silk",
        set: {
          params: {
            time: 0,
            mode: getTheme() === "light" ? 1 : 0,
            pointer: [pointer.x, pointer.y],
            texel: canvasSurface.texelSize,
          },
        },
      });

      unsubResize = canvasSurface.onResize(() => {
        silk.set({ params: { texel: canvasSurface.texelSize } });
      });

      const time = clock(gpu);
      const drawFrame = (currentFrame: Frame) => {
        if (document.hidden || !inView) return;
        pointer.x += (pointerTarget.x - pointer.x) * 0.045;
        pointer.y += (pointerTarget.y - pointer.y) * 0.045;
        silk.set({
          params: {
            time: animate ? time.time : 1.8,
            mode: getTheme() === "light" ? 1 : 0,
            pointer: [pointer.x, pointer.y],
          },
        });
        currentFrame.pass(canvasSurface, silk);
      };

      if (animate) {
        loop = frameLoop(gpu, drawFrame, { fps: 30 });
      } else {
        loop = frameLoop(gpu, drawFrame, { fps: 1 });
      }

      onReady?.();
    } catch {
      gpu?.dispose();
      gpu = undefined;
    }
  })();

  return () => {
    disposed = true;
    unsubPointer?.();
    unsubResize?.();
    observer.disconnect();
    loop?.stop();
    gpu?.dispose();
  };
}
