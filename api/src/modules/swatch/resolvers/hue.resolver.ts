import { Resolver, Query } from '@nestjs/graphql';

import { Hue } from '../models';
import { SwatchService } from '../services';

@Resolver(() => Hue)
export class HueResolver {
  constructor(private readonly swatchService: SwatchService) {}

  @Query(() => [Hue], { name: 'hues' })
  async getAllHues(): Promise<Hue[]> {
    return this.swatchService.getAllHues();
  }
}
