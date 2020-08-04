import { Injectable } from '@nestjs/common';
import { Swatch, SwatchColor, FindManySwatchArgs } from '@prisma/client';
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

  async getById(swatchId: number): Promise<Swatch> {
    return this.prismaService.swatch.findOne({ where: { id: swatchId } });
  }

  async getPaginatedList(
    params?: SwatchPaginationParams,
  ): Promise<PaginatedList<Swatch>> {
    const page = this.getPage(params.page);
    const pageSize = this.getPageSize(params.pageSize);

    const { query, color } = params;

    const count = await this.prismaService.swatch.count();

    const findManySwatchArgs: FindManySwatchArgs = {
      where: {},
      take: pageSize,
      skip: this.getPaginationOffset({ page, pageSize }),
    };

    if (query) {
      findManySwatchArgs.where.hex = {
        contains: query,
      };
    }

    if (color) {
      findManySwatchArgs.where.hue = {
        name: {
          equals: capitalize(color),
        },
      };
    }

    const swatches = await this.prismaService.swatch.findMany(
      findManySwatchArgs,
    );

    return this.createPaginationPayload({
      count,
      page,
      pageSize,
      data: swatches,
    });
  }

  async getMany(params: { hueIds?: number[] } = {}): Promise<Swatch[]> {
    const { hueIds } = params;

    return this.prismaService.swatch.findMany({
      where: {
        hueId: {
          in: hueIds,
        },
      },
    });
  }

  async getColorsBySwatchId(swatchId: number): Promise<SwatchColor[]> {
    return this.prismaService.swatchColor.findMany({ where: { swatchId } });
  }
}
