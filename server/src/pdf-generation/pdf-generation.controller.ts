import { Controller, Post, Body } from '@nestjs/common';
import { PdfGenerationService } from './pdf-generation.service';

@Controller('pdf')
export class PdfGenerationController {
  constructor(private readonly pdfGenerationService: PdfGenerationService) {}

  @Post()
  async generatePdf(@Body() body: { html: string }) {
    const { html } = body;
    await this.pdfGenerationService.generatePdf(html);
    return 'PDF generation complete';
  }
}
