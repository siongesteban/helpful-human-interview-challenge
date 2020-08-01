import { Parent, Resolver, ResolveField, Query } from '@nestjs/graphql';
import { Hue, Shade } from '@prisma/client';

import { Shade as ShadeModel } from '../models';
import { SwatchService } from '../services';

@Resolver(() => ShadeModel)
export class ShadeResolver {
  constructor(private readonly swatchService: SwatchService) {}

  @Query(() => [ShadeModel], { name: 'shades' })
  async getPaginatedShades(): Promise<Shade[]> {
    return this.swatchService.getPaginatedShades();
  }

  @ResolveField()
  async hue(@Parent() shade: Shade): Promise<Hue> {
    const { hueId } = shade;

    return this.swatchService.getHueByID(hueId);
  }
}
