import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfGenerationService {
  async generatePdf(html: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(html);
    await page.setContent(html);
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.pdf({
      path: 'test.pdf',
      pageRanges: '1-2',
      format: 'A4',
      printBackground: true,
    });

    await browser.close();
  }
}
