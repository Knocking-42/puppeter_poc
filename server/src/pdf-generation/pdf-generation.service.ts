import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as handlebars from 'handlebars';
import * as path from 'path';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfGenerationService {
  async renderTemplate(bodyData: string) {
    const templateSource = await fs.readFile(
      path.join(__dirname, '../../', 'views', 'index.hbs'),
      'utf-8',
    );
    const template = handlebars.compile(templateSource);
    return template({
      body: bodyData,
    });
  }

  async generatePdf(html: string): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(html);
    await page.setContent(html);
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.addStyleTag({
      path: '',
    });
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
