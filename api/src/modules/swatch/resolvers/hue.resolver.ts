import {
  Context,
  Parent,
  Resolver,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { Hue, Shade } from '@prisma/client';

import { GraphQLContext } from '@shared/graphql/types';

import { Hue as HueModel } from '../models';
import { SwatchService } from '../services';

@Resolver(() => HueModel)
export class HueResolver {
  constructor(private readonly swatchService: SwatchService) {}

  @Query(() => [HueModel], { name: 'hues' })
  async getAllHues(): Promise<Hue[]> {
    return this.swatchService.getAllHues();
  }

  @ResolveField()
  async shades(
    @Parent() hue: Hue,
    @Context() context: GraphQLContext,
  ): Promise<Shade[]> {
    return context.shadesLoader.load(hue.id);
  }
}
