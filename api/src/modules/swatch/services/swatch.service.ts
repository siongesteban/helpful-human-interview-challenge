import { Injectable } from '@nestjs/common';

import { Color } from '@prisma/client';

import { ColorRepository } from '../repositories';

@Injectable()
export class SwatchService {
  constructor(private readonly colorRepository: ColorRepository) {}

  async getColorByID(colorId: number): Promise<Color | null> {
    return this.colorRepository.getByID(colorId);
  }
}
