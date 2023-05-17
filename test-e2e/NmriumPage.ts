import { Locator, Page } from "@playwright/test";

export default class NmriumPage {
  public readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public static async createReact(page: Page): Promise<NmriumPage> {
    await page.goto("http://localhost:4001");
    return new NmriumPage(page);
  }
  public static async createAngular(page: Page): Promise<NmriumPage> {
    await page.goto("http://localhost:4002");
    return new NmriumPage(page);
  }
}
