import {
  Context,
  Parent,
  Resolver,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { Hue, Shade } from '@prisma/client';

import { GraphQLContext } from '@shared/graphql/types';

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
  async hue(
    @Parent() shade: Shade,
    @Context() context: GraphQLContext,
  ): Promise<Hue> {
    return context.hueLoader.load(shade.hueId);
  }
}
