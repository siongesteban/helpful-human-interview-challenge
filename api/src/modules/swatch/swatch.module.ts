import { Module } from '@nestjs/common';

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
  ],
})
export class SwatchModule {}
