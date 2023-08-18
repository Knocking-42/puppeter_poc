import { Test, TestingModule } from '@nestjs/testing';
import { PdfGenerationController } from './pdf-generation.controller';

describe('PdfGenerationController', () => {
  let controller: PdfGenerationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PdfGenerationController],
    }).compile();

    controller = module.get<PdfGenerationController>(PdfGenerationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
