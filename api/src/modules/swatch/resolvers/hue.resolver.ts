import {
  Context,
  Parent,
  Resolver,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { Hue, Swatch } from '@prisma/client';

import { GraphQLContext } from '@shared/graphql/types';

import { Hue as HueModel } from '../models';
import { ColorService } from '../services';

@Resolver(() => HueModel)
export class HueResolver {
  constructor(private readonly swatchService: ColorService) {}

  @Query(() => [HueModel], { name: 'hues' })
  async getAllHues(): Promise<Hue[]> {
    return this.swatchService.getAllHues();
  }

  @ResolveField()
  async swatches(
    @Parent() hue: Hue,
    @Context() context: GraphQLContext,
  ): Promise<Swatch[]> {
    return context.swatchesLoader.load(hue.id);
  }
}
