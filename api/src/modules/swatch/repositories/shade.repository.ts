import { Injectable } from '@nestjs/common';
import { Shade } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Repository } from '@shared/types';

@Injectable()
export class ShadeRepository implements Repository<Shade> {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<Shade[]> {
    return this.prismaService.shade.findMany();
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
