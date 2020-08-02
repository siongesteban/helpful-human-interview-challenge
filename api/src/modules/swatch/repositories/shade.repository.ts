import { Injectable } from '@nestjs/common';
import { Shade } from '@prisma/client';

import { BaseRepository } from '@shared/classes';
import { PrismaService } from '@shared/prisma/services';
import { Paginated, PaginationParams, Repository } from '@shared/types';

@Injectable()
export class ShadeRepository extends BaseRepository<Shade>
  implements Repository<Shade> {
  constructor(private readonly prismaService: PrismaService) {
    super();
  }

  async getPaginated(params: PaginationParams): Promise<Paginated<Shade>> {
    const { page, pageSize } = params;

    const count = await this.prismaService.shade.count();

    const shades = await this.prismaService.shade.findMany({
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
