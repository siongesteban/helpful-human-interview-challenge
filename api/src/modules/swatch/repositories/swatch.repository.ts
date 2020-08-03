import { Injectable } from '@nestjs/common';
import { Swatch } from '@prisma/client';
import capitalize from 'lodash/capitalize';

import { BaseRepository } from '@shared/classes';
import { PrismaService } from '@shared/prisma/services';
import { PaginatedList, Repository } from '@shared/types';

import { SwatchPaginationParams } from '../types';

@Injectable()
export class SwatchRepository extends BaseRepository<Swatch>
  implements Repository<Swatch> {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async getPaginatedList(
    params?: SwatchPaginationParams,
  ): Promise<PaginatedList<Swatch>> {
    const page = this.getPage(params.page);
    const pageSize = this.getPageSize(params.pageSize);

    const { query } = params;

    const count = await this.prismaService.swatch.count();

    const swatches = await this.prismaService.swatch.findMany({
      where: {
        OR: [
          {
            hex: {
              contains: query?.toLowerCase(),
            },
          },
          {
            hue: {
              name: {
                contains: capitalize(query),
              },
            },
          },
        ],
      },
      take: pageSize,
      skip: this.getPaginationOffset({ page, pageSize }),
    });

    return this.createPaginationPayload({
      count,
      page,
      pageSize,
      data: swatches,
    });
  }

  getMany(params: { hueIDs?: number[] } = {}): Promise<Swatch[]> {
    const { hueIDs } = params;

    return this.prismaService.swatch.findMany({
      where: {
        hueId: {
          in: hueIDs,
        },
      },
    });
  }
}