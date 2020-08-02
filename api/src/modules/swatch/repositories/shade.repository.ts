import { Injectable } from '@nestjs/common';
import { Shade } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Paginated, PaginationParams, Repository } from '@shared/types';
import { createPaginatedList, getPaginationOffset } from '@shared/utils';

@Injectable()
export class ShadeRepository implements Repository<Shade> {
  constructor(private readonly prismaService: PrismaService) {}

  async getPaginated(params: PaginationParams): Promise<Paginated<Shade>> {
    const { page, pageSize } = params;

    const count = await this.prismaService.shade.count();

    const shades = await this.prismaService.shade.findMany({
      take: pageSize,
      skip: getPaginationOffset({ page, pageSize }),
    });

    return createPaginatedList({
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
