import { Injectable } from '@nestjs/common';

import { Color } from '@prisma/client';

import { PrismaService } from '@shared/prisma/services';
import { Repository } from '@shared/types';

@Injectable()
export class ColorRepository implements Repository<Color> {
  constructor(private readonly prismaService: PrismaService) {}

  getByID(id: number): Promise<Color | null> {
    return this.prismaService.color.findOne({ where: { id } });
  }
}
