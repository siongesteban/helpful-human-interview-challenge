import {
  Args,
  Context,
  Parent,
  Resolver,
  ResolveField,
  Query,
} from '@nestjs/graphql';
import { Hue, Shade } from '@prisma/client';

import { GraphQLContext } from '@shared/graphql/types';
import { PaginatedList } from '@shared/types';

import { GetPaginatedShadesArgs } from '../dtos';
import { Shade as ShadeModel, PaginatedShades } from '../models';
import { SwatchService } from '../services';

@Resolver(() => ShadeModel)
export class ShadeResolver {
  constructor(private readonly swatchService: SwatchService) {}

  @Query(() => PaginatedShades, { name: 'paginatedShades' })
  async getPaginatedShades(
    @Args() args?: GetPaginatedShadesArgs,
  ): Promise<PaginatedList<Shade>> {
    const { page, pageSize } = args;
    return this.swatchService.getPaginatedShades({ page, pageSize });
  }

  @ResolveField()
  async hue(
    @Parent() shade: Shade,
    @Context() context: GraphQLContext,
  ): Promise<Hue> {
    return context.hueLoader.load(shade.hueId);
  }
}
