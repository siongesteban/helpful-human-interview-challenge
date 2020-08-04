import {
  Args,
  Context,
  Int,
  Parent,
  Resolver,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { Hue, Swatch, SwatchColor } from '@prisma/client';

import { GraphQLContext } from '@shared/graphql/types';
import { PaginatedList } from '@shared/types';

import { GetPaginatedSwatchesArgs } from '../dtos';
import { Swatch as SwatchModel, PaginatedSwatches } from '../models';
import { ColorService } from '../services';

@Resolver(() => SwatchModel)
export class SwatchResolver {
  constructor(private readonly swatchService: ColorService) {}

  @Query(() => PaginatedSwatches, { name: 'paginatedSwatches' })
  async getPaginatedSwatches(
    @Args() args?: GetPaginatedSwatchesArgs,
  ): Promise<PaginatedList<Swatch>> {
    return this.swatchService.getPaginatedSwatches(args);
  }

  @Query(() => SwatchModel, { name: 'swatch' })
  async getSwatchById(
    @Args('id', { type: () => Int }) swatchId: number,
  ): Promise<Swatch> {
    return this.swatchService.getSwatchById(swatchId);
  }

  @ResolveField()
  async hue(
    @Parent() swatch: Swatch,
    @Context() context: GraphQLContext,
  ): Promise<Hue> {
    return context.hueLoader.load(swatch.hueId);
  }

  @ResolveField()
  async colors(@Parent() swatch: Swatch): Promise<SwatchColor[]> {
    return this.swatchService.getColorsBySwatchId(swatch.id);
  }
}
