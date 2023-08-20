import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as handlebars from 'handlebars';
import * as fs from 'fs/promises';

@Injectable()
export class PdfGenerationService {
  async renderTemplate(templatePath, data) {
    const templateSource = await fs.readFile(templatePath, 'utf-8');
    const template = handlebars.compile(templateSource);
    return template(data);
  }

  async generatePdf(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(html);
    await page.setContent(html);
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    const pdfBuffer = await page.pdf({
      path: 'test.pdf',
      pageRanges: '1-2',
      format: 'A4',
      printBackground: true,
    });

    await browser.close();

    return pdfBuffer;
  }
}
