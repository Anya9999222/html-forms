import puppeteer from "puppeteer";

describe("Widget", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("Button should render on page start", async () => {
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".toggle");
  });

  test("Button should add .active class on click", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".toggle");

    const button = await page.$(".toggle");
    const active = await page.$(".active");
    await button.click();

    await page.waitForSelector(".toggle.active");

    expect(active).toBeDefined();
  });

  test("Popover should render", async () => {
    jest.setTimeout(20000);
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".toggle");

    const button = await page.$(".toggle");
    const popover = await page.$(".popover");
    await button.click();

    await page.waitForSelector(".popover");

    expect(popover).toBeDefined();
  });

  afterEach(async () => {
    await browser.close();
  });
});
