import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfGenerationService } from './pdf-generation.service';

@Controller('pdf')
export class PdfGenerationController {
  constructor(private readonly pdfGenerationService: PdfGenerationService) {}

  @Post()
  async generatePdf(@Body() body, @Res() res: Response) {
    const pdfBuffer = await this.pdfGenerationService.generatePdf(body.data);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=test.pdf');

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
    return 'PDF generation complete';
  }
}
