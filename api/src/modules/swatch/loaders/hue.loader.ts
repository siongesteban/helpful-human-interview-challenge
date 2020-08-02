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

  private async batchHues(hueIDs: number[]): Promise<Hue[]> {
    const hues = await this.hueRepository.getMany({ hueIDs });

    const hueMapByID = hues.reduce<Record<number, Hue>>((currentMap, hue) => {
      if (!currentMap[hue.id]) {
        currentMap[hue.id] = hue;
      }

      return currentMap;
    }, {});

    return hueIDs.map(hueID => hueMapByID[hueID]);
  }
}
