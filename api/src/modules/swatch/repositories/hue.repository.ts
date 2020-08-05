import { Injectable } from '@nestjs/common';

import { Hue } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Repository } from '@shared/types';

@Injectable()
export class HueRepository implements Repository<Hue> {
  constructor(private readonly prismaService: PrismaService) {}

  getMany(params: { hueIds?: number[] } = {}): Promise<Hue[]> {
    const { hueIds } = params;

    return this.prismaService.hue.findMany({
      where: {
        id: {
          in: hueIds,
        },
      },
    });
  }

  getAll(): Promise<Hue[]> {
    return this.prismaService.hue.findMany();
  }
}
