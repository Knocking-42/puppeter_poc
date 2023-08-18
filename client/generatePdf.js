const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  await page.pdf({
    path: "test.pdf",
    pageRanges: "1-2",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();
