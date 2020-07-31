import { Injectable } from '@nestjs/common';

import { Hue } from '@prisma/client';

import { HueRepository } from '../repositories';

@Injectable()
export class SwatchService {
  constructor(private readonly hueRepository: HueRepository) {}

  async getHueByID(hueID: number): Promise<Hue | null> {
    return this.hueRepository.getByID(hueID);
  }
}
