import { Resolver, Query } from '@nestjs/graphql';

import { Color } from '../models';

@Resolver(() => Color)
export class ColorResolver {
  @Query(() => Color, { name: 'color' })
  async getColor(): Promise<Color> {
    return { name: 'red' };
  }
}
