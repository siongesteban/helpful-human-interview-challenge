import { Injectable } from '@nestjs/common';
import { Shade } from '@prisma/client';

import { ShadeRepository } from '../repositories';
import { ShadesLoader } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const DataLoader = require('dataloader');

@Injectable()
export class ShadesLoaderCreator {
  constructor(private readonly shadeRepository: ShadeRepository) {}

  create(): ShadesLoader {
    return new DataLoader(this.batchShades.bind(this));
  }

  private async batchShades(hueIDs: number[]): Promise<Shade[][]> {
    const shades = await this.shadeRepository.getMany({ hueIDs });

    const shadesMapHueByID = shades.reduce<Record<number, Shade[]>>(
      (currentMap, shade) => {
        const shadesByHueID = currentMap[shade.hueId];

        if (shadesByHueID?.length) {
          currentMap[shade.hueId].push(shade);

          return currentMap;
        }

        currentMap[shade.hueId] = [shade];

        return currentMap;
      },
      {},
    );

    return hueIDs.map(hueID => shadesMapHueByID[hueID]);
  }
}
