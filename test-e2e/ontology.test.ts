import { test, expect } from "@playwright/test";

import NmriumPage from "./NmriumPage";

test("Should Load ontology elements in react component", async ({ page }) => {
  const nmrium = await NmriumPage.createReact(page);
  expect(await nmrium.page.title()).toBe("React");
});
test("Should Load ontology elements in angular component", async ({ page }) => {
  const nmrium = await NmriumPage.createAngular(page);
  expect(await nmrium.page.title()).toBe("Angular");
});
