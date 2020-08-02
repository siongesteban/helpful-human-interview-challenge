import { Module } from '@nestjs/common';

import { HueLoaderCreator, ShadesLoaderCreator } from './loaders';
import { HueRepository, ShadeRepository } from './repositories';
import { HueResolver, ShadeResolver } from './resolvers';
import { SwatchService } from './services';

@Module({
  providers: [
    HueRepository,
    ShadeRepository,
    HueResolver,
    ShadeResolver,
    SwatchService,
    HueLoaderCreator,
    ShadesLoaderCreator,
  ],
  exports: [HueLoaderCreator, ShadesLoaderCreator],
})
export class SwatchModule {}
