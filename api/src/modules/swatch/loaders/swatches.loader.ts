import { Injectable } from '@nestjs/common';
import { Swatch } from '@prisma/client';
import DataLoader from 'dataloader';

import { SwatchRepository } from '../repositories';
import { SwatchesLoader } from '../types';

@Injectable()
export class SwatchesLoaderCreator {
  constructor(private readonly swatchRepository: SwatchRepository) {}

  create(): SwatchesLoader {
    return new DataLoader(this.batchSwatches.bind(this));
  }

  private async batchSwatches(hueIDs: number[]): Promise<Swatch[][]> {
    const swatches = await this.swatchRepository.getMany({ hueIDs });

    const swatchesMapByID = swatches.reduce<Record<number, Swatch[]>>(
      (currentMap, swatch) => {
        const swatchesByHueID = currentMap[swatch.hueId];

        if (swatchesByHueID?.length) {
          currentMap[swatch.hueId].push(swatch);

          return currentMap;
        }

        currentMap[swatch.hueId] = [swatch];

        return currentMap;
      },
      {},
    );

    return hueIDs.map(hueID => swatchesMapByID[hueID]);
  }
}
