import { Injectable } from '@nestjs/common';

import { Hue } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Repository } from '@shared/types';

@Injectable()
export class HueRepository implements Repository<Hue> {
  constructor(private readonly prismaService: PrismaService) {}

  getMany(params: { hueIDs?: number[] } = {}): Promise<Hue[]> {
    const { hueIDs } = params;

    return this.prismaService.hue.findMany({
      where: {
        id: {
          in: hueIDs,
        },
      },
    });
  }

  getAll(): Promise<Hue[]> {
    return this.prismaService.hue.findMany();
  }
}
