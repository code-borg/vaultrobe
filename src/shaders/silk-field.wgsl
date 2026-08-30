import { fbmPerlin2d } from "@vgpu/wgsl-std/noise/perlin";

const WARP_OCTAVES: i32 = 3;
const FIELD_OCTAVES: i32 = 4;
const LACUNARITY: f32 = 2.17;
const GAIN: f32 = 0.5;

/// Domain-warped fBM that reads as draped silk rather than raw noise.
export fn silkHeight(p: vec2f, time: f32) -> f32 {
  let drift = vec2f(time * 0.028, time * 0.017);
  let sample = p * 1.35 + drift;

  let warp = vec2f(
    fbmPerlin2d(sample, WARP_OCTAVES, LACUNARITY, GAIN),
    fbmPerlin2d(sample + vec2f(17.2, 11.7), WARP_OCTAVES, LACUNARITY, GAIN),
  );

  return fbmPerlin2d(sample + warp * 0.42, FIELD_OCTAVES, LACUNARITY, GAIN);
}
