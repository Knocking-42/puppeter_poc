import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PdfGenerationService } from './pdf-generation/pdf-generation.service';
import { PdfGenerationController } from './pdf-generation/pdf-generation.controller';

@Module({
  imports: [],
  controllers: [AppController, PdfGenerationController],
  providers: [AppService, PdfGenerationService],
})
export class AppModule {}
