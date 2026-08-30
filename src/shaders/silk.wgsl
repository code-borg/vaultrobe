import { hash2 } from "@vgpu/wgsl-std/hash";
import { silkHeight } from "./silk-field.wgsl";

struct Params {
  time: f32,
  mode: f32,
  pointer: vec2f,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn saturate(value: f32) -> f32 {
  return clamp(value, 0.0, 1.0);
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = vec2f((uv.x - 0.5) * aspect, uv.y - 0.42);

  let height = silkHeight(p, params.time);
  let normal = normalize(vec3f(-dpdx(height), -dpdy(height), 0.55));

  let pointer = vec2f((params.pointer.x - 0.5) * aspect, params.pointer.y - 0.42);
  let lightDir = normalize(vec3f(pointer.x * 0.7 + 0.25, -0.35, 0.9));
  let viewDir = vec3f(0.0, 0.15, 1.0);
  let halfDir = normalize(lightDir + viewDir);
  let diffuse = saturate(dot(normal, lightDir) * 0.5 + 0.5);
  let spec = pow(saturate(dot(normal, halfDir)), 42.0);
  let fold = pow(saturate(1.0 - abs(height)), 3.2);

  let gold = vec3f(0.91, 0.77, 0.43);
  let rose = vec3f(0.86, 0.55, 0.58);
  let emerald = vec3f(0.51, 0.82, 0.55);
  let ivory = vec3f(0.98, 0.95, 0.88);

  let mixT = saturate(height * 0.55 + 0.5);
  var silk = mix(rose, gold, mixT);
  silk = mix(silk, ivory, fold * 0.35);
  silk = mix(silk, emerald, saturate(-height) * 0.12);
  silk = silk * (0.28 + diffuse * 0.72) + gold * spec * 0.55 + ivory * fold * 0.08;

  let toPointer = uv - params.pointer;
  let glow = exp(-dot(toPointer, toPointer) * 7.5) * 0.22;
  silk = silk + gold * glow;

  let darkBg = vec3f(0.043, 0.039, 0.031);
  let lightBg = vec3f(0.969, 0.949, 0.910);
  let bg = mix(darkBg, lightBg, params.mode);
  var color = mix(bg, silk, mix(0.42, 0.28, params.mode));

  // Keep the headline region quieter so copy stays readable.
  let center = length((uv - vec2f(0.5, 0.34)) * vec2f(1.15, 1.35));
  let veil = smoothstep(0.18, 0.92, center);
  color = mix(bg, color, 0.22 + veil * 0.78);

  let floorFade = smoothstep(0.78, 1.0, uv.y);
  color = mix(color, bg, floorFade);

  let grain = (hash2(uv / max(params.texel, vec2f(1.0e-5))).x - 0.5) * 0.018;
  color = color + vec3f(grain);

  return vec4f(color, 1.0);
}
