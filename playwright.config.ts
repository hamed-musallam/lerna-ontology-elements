import { PlaywrightTestConfig, devices, ViewportSize } from "@playwright/test";

const viewportOverride: ViewportSize = {
  width: 1600,
  height: 900,
};

const config: PlaywrightTestConfig = {
  testDir: "test-e2e",
  retries: 1,
  forbidOnly: !!process.env.CI,
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    // video: 'on-first-retry',
    launchOptions: {
      // slowMo: 250,
    },
    contextOptions: {
      strictSelectors: true,
    },
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command: "lerna exec --scope react-app npm run start -- --no-open",
      port: 4001,
      reuseExistingServer: true,
    },
    {
      command: "lerna exec --scope angular-app npm run start -- --no-open",
      port: 4002,
      reuseExistingServer: true,
    },
  ],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: viewportOverride,
        permissions: ["clipboard-read", "clipboard-write"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        viewport: viewportOverride,
      },
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        viewport: viewportOverride,
      },
    },
  ],
};

export default config;
