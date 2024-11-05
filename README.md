# Reproducing bug: in Chromium Linux, pointerenter gets triggered at pixel (0, 0)

When running Playwright-ct tests on Chromium Linux, `pointerenter` gets triggered at pixel (0, 0).

- [Chromium screenshot](https://github.com/atn832/playwright-chrome-linux-mouse-enter-bug/blob/main/__snapshots__/src/App.spec.js-snapshots/mouse-enter-1-chromium-linux.png) says `isHovered: true` instead of `false`.
- [Firefox screenshot](https://github.com/atn832/playwright-chrome-linux-mouse-enter-bug/blob/main/__snapshots__/src/App.spec.js-snapshots/mouse-enter-1-firefox-linux.png) says `isHovered: false` as expected.
- [Webkit screenshot](https://github.com/atn832/playwright-chrome-linux-mouse-enter-bug/blob/main/__snapshots__/src/App.spec.js-snapshots/mouse-enter-1-webkit-linux.png) says `isHovered: false` as expected.

I've verified that this happens in Playwright 1.48.2 and 1.48.0, but did not happen in 1.47.2. Also, the bug happens with both `pointerenter` and `mouseenter`.

## How I made the example

The main commit is https://github.com/atn832/playwright-chrome-linux-mouse-enter-bug/commit/582d92bd608d5db91914f5b790d2cd08134eaae5:

- Created an empty React app with [Create React App](https://github.com/facebook/create-react-app).
- Installed Playwright ct by running `npm init playwright@latest -- --ct`. https://playwright.dev/docs/test-components
- In playwright/index.html, I added css so that an `<h1>` would appear at the very top left corner. https://github.com/atn832/playwright-chrome-linux-mouse-enter-bug/blob/582d92bd608d5db91914f5b790d2cd08134eaae5/playwright/index.html#L7-L11
- `Apps.spec.js` renders `<App />`, which then renders an `<h1>`  with a `pointerenter` listener. If `<App>` captures a pointerenter, its `isHovered` state turns to true.

## Run the test yourself

1. Delete `__snapshots__`.
1. Run `test-ct:docker:build` to build the Docker container.
1. Run `test-ct:docker:run` to regenerate the screenshots or compare actual screenshots with the repository's.
1. Observe that for Chromium only, `onPointerEnter` is called, and `isHovered` is `true` as a result, while it is `false` for Webkit and Firefox.
1. To check on an older version of Playwright, change the version for @playwright/experimental-ct-react in package.json and in the Dockerfile.
