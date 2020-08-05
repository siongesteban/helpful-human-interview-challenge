import { Injectable } from '@nestjs/common';
import { Hue } from '@prisma/client';
import DataLoader from 'dataloader';

import { HueRepository } from '../repositories';
import { HueLoader } from '../types';

@Injectable()
export class HueLoaderCreator {
  constructor(private readonly hueRepository: HueRepository) {}

  create(): HueLoader {
    return new DataLoader(this.batchHues.bind(this));
  }

  private async batchHues(hueIds: number[]): Promise<Hue[]> {
    const hues = await this.hueRepository.getMany({ hueIds });

    const hueMapById = hues.reduce<Record<number, Hue>>((currentMap, hue) => {
      if (!currentMap[hue.id]) {
        currentMap[hue.id] = hue;
      }

      return currentMap;
    }, {});

    return hueIds.map(hueId => hueMapById[hueId]);
  }
}
