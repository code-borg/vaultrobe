# Vaultrobe — Continuous Product Shot

A separate, offline-ready promotional artifact made with the local Bang Motion
skill. This HTML is served as a static file; it is not embedded in the Next.js
component tree. It never loads on the homepage.

## Preview

- With the existing Next.js preview: `/motion/vaultrobe-product-shot/index.html`.
- Or open this folder's `index.html` directly. Keep the folder's assets together.
- Review controls: append `?debug=1` (play/pause, restart, keyboard-operable scrubber).
- Still frame: append `?debug=1&t=10.5`.
- Optional loop: append `?loop=1`. By default the shot holds on the brand ending.
- Export setup: `?clean=1`, then call `OPENER.seek(seconds)` or
  `await OPENER.seekFrame(seconds)` after `OPENER.ready` becomes true.
- Space pauses/resumes; R restarts. These shortcuts don't intercept controls.
- Reduced motion presents the final composition immediately and disables replay.
- Portrait phones get a 1080×1920 composition; wider screens get 1920×1080.
  Composition is chosen at load; refresh after changing device orientation to
  review the other composition. Resizing scales the current composition to fit.

## Storyboard (18 seconds)

| Time | Continuous action |
| --- | --- |
| 0–3.6 s | Close-up of the real wardrobe grid; a small camera drift reveals detail. |
| 3.6–10.2 s | One smooth pullback reveals the full upright closet phone. |
| 7.2–9.2 s | Supporting analytics phone resolves into the original overlapping composition. |
| 9.2–11.9 s | Existing brand, headline phrases, and gold Google Play CTA resolve. |
| 11.9–18 s | Hold the finished editorial composition. |

Structure fingerprint: continuous product shot · one persistent world / three
beats · original wardrobe phone · interface macro opening · brand/headline close.

## Design sources

- Primary reference: the user's Vaultrobe homepage screenshot, `ss1.png`.
- Cormorant Garamond and DM Sans: the same Latin font assets used by the website.
- Ivory #F7F2E8, ink #120E0A, and gold #826018: existing light-theme CSS tokens.
- Gold button gradient: existing `.light .btn-gold` treatment.
- App screenshots and monogram: copies of existing `public` assets.
- No invented UI, alternate copy, generated imagery, audio, or tracking.

## Runtime and performance

GSAP 3.12.5 is vendored only in this directory, with its original license header.
Source: https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js
Licensing: https://gsap.com/standard-license/

The timeline owns camera and text state; seeking doesn't accumulate movement.
Animations use transforms and opacity, with a fixed shadow. No canvas, WebGL,
scroll listener, continuous custom render loop, CDN, or font network requests.
Playback pauses when hidden. If JS is disabled, the finished composition remains
visible. The CTA seeks to the finished frame when focused by keyboard.

## Validation limits

Build, lint, source checks, timeline structure, asset paths, and HTTP responses
can be verified in this environment. Browser access was unavailable during
implementation. Frame captures, actual font layout, touch playback, reduced-motion
rendering, and visual desktop/mobile smoothness still require browser review.
No video/MP4 export is included.
