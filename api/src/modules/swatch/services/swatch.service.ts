import { Injectable } from '@nestjs/common';
import { Hue, Shade } from '@prisma/client';

import { PaginatedList } from '@shared/types';

import { HueRepository, ShadeRepository } from '../repositories';
import { ShadePaginationParams } from '../types';

@Injectable()
export class SwatchService {
  constructor(
    private readonly hueRepository: HueRepository,
    private readonly shadeRepository: ShadeRepository,
  ) {}

  async getAllHues(): Promise<Hue[]> {
    return this.hueRepository.getAll();
  }

  async getPaginatedShades(
    params?: ShadePaginationParams,
  ): Promise<PaginatedList<Shade>> {
    return this.shadeRepository.getPaginatedList(params);
  }
}
