import { Injectable } from '@nestjs/common';
import { Hue, Swatch } from '@prisma/client';

import { PaginatedList } from '@shared/types';

import { HueRepository, SwatchRepository } from '../repositories';
import { SwatchPaginationParams } from '../types';

@Injectable()
export class ColorService {
  constructor(
    private readonly hueRepository: HueRepository,
    private readonly swatchRepository: SwatchRepository,
  ) {}

  async getAllHues(): Promise<Hue[]> {
    return this.hueRepository.getAll();
  }

  async getPaginatedSwatches(
    params?: SwatchPaginationParams,
  ): Promise<PaginatedList<Swatch>> {
    return this.swatchRepository.getPaginatedList(params);
  }
}
