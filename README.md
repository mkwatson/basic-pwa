# Minimal PWA Example

This project demonstrates a **minimal Progressive Web App (PWA)** that can detect whether it’s running in installed (standalone/fullscreen) mode vs. browser mode. The code is intentionally concise, showing how to detect installed mode and prompt for installation on Android.

## Purpose

- **Show a minimal PWA** setup (HTML, manifest, service worker).
- Demonstrate **how to detect** if the PWA is installed vs. running in a browser.
- Serve as a **reference** for implementing similar logic in larger apps.

## Key Code Snippet

In `index.html`, we detect installed mode with:

```js
const isStandalone =
  window.matchMedia('(display-mode: fullscreen)').matches ||
  (typeof navigator.standalone !== 'undefined' && navigator.standalone);
```

### Explanation

- `window.matchMedia('(display-mode: fullscreen)')` checks if the PWA’s display mode is set to `fullscreen` in the manifest and the app is launched that way.
- `navigator.standalone` is specific to iOS Safari, indicating the web app is running from the home screen.

> **Important:** For Android (Chrome, Samsung Internet, etc.) to report `isStandalone` as `true`, the `display` field in `manifest.webmanifest` must match what you check for in `matchMedia`. For example, if you set `\"display\": \"fullscreen\"`, then you must check `(display-mode: fullscreen)`.

## Tested Browsers

- **iOS:** Safari, Chrome
- **Android:** Chrome, Samsung Internet

## Try It Yourself

A live demo is hosted on GitHub Pages:
[https://mkwatson.github.io/basic-pwa/](https://mkwatson.github.io/basic-pwa/)

1. **Install on Android:**
   - Open the link in Chrome or Samsung Internet.
   - When prompted (or via “Add to Home screen”/“Install”), install the PWA.
   - Launch from the home screen to see “Standalone/Installed Mode” displayed.

2. **Install on iOS:**
   - Open in Safari.
   - Use “Share” → “Add to Home Screen.”
   - Launch from the home screen to see “Standalone/Installed Mode.”

## Additional Notes

- For a minimal service worker, see `sw.js`. It’s enough to make the PWA installable, but does not do offline caching or other advanced features.
- You can easily adapt this structure for more complex apps—just keep the detection logic and manifest configuration consistent with your chosen display mode.