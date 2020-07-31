import { Resolver, Query } from '@nestjs/graphql';

import { PrismaService } from '@shared/prisma/services';

import { Color } from '../models';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => Color, { name: 'color' })
  async getColor(): Promise<Color> {
    return this.prismaService.color.findOne({ where: { id: 1 } });
  }
}
