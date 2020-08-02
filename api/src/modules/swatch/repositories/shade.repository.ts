import { Injectable } from '@nestjs/common';
import { Shade } from '@prisma/client';
import capitalize from 'lodash/capitalize';

import { BaseRepository } from '@shared/classes';
import { PrismaService } from '@shared/prisma/services';
import { PaginatedList, Repository } from '@shared/types';

import { ShadePaginationParams } from '../types';

@Injectable()
export class ShadeRepository extends BaseRepository<Shade>
  implements Repository<Shade> {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async getPaginatedList(
    params?: ShadePaginationParams,
  ): Promise<PaginatedList<Shade>> {
    const page = this.getPage(params.page);
    const pageSize = this.getPageSize(params.pageSize);

    const { query } = params;

    const count = await this.prismaService.shade.count();

    const shades = await this.prismaService.shade.findMany({
      where: {
        OR: [
          {
            hex: {
              contains: query.toLowerCase(),
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
      data: shades,
    });
  }

  getMany(params: { hueIDs?: number[] } = {}): Promise<Shade[]> {
    const { hueIDs } = params;

    return this.prismaService.shade.findMany({
      where: {
        hueId: {
          in: hueIDs,
        },
      },
    });
  }
}
