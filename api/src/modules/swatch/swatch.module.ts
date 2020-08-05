import { Module } from '@nestjs/common';

import { HueLoaderCreator, SwatchesLoaderCreator } from './loaders';
import { HueRepository, SwatchRepository } from './repositories';
import { HueResolver, SwatchResolver } from './resolvers';
import { ColorService } from './services';

@Module({
  providers: [
    HueRepository,
    SwatchRepository,
    HueResolver,
    SwatchResolver,
    ColorService,
    HueLoaderCreator,
    SwatchesLoaderCreator,
  ],
  exports: [HueLoaderCreator, SwatchesLoaderCreator],
})
export class SwatchModule {}
