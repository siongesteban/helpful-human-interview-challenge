import { Resolver, Query } from '@nestjs/graphql';

import { Color } from '../models';
import { SwatchService } from '../services';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly swatchService: SwatchService) {}

  @Query(() => Color, { name: 'color', nullable: true })
  async getColor(): Promise<Color | null> {
    return this.swatchService.getColorByID(2);
  }
}
