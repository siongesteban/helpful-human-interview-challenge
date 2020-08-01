import { Injectable } from '@nestjs/common';

import { Hue } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Repository } from '@shared/types';

@Injectable()
export class HueRepository implements Repository<Hue> {
  constructor(private readonly prismaService: PrismaService) {}

  getAll(): Promise<Hue[]> {
    return this.prismaService.hue.findMany();
  }

  getByID(hueID: number): Promise<Hue> {
    return this.prismaService.hue.findOne({ where: { id: hueID } });
  }
}
