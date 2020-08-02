import { Injectable } from '@nestjs/common';

import { Hue, Shade } from '@prisma/client';

import { HueRepository, ShadeRepository } from '../repositories';

@Injectable()
export class SwatchService {
  constructor(
    private readonly hueRepository: HueRepository,
    private readonly shadeRepository: ShadeRepository,
  ) {}

  async getAllHues(): Promise<Hue[]> {
    return this.hueRepository.getAll();
  }

  async getPaginatedShades(): Promise<Shade[]> {
    return this.shadeRepository.getAll();
  }
}
