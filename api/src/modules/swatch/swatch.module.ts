import { Module } from '@nestjs/common';

import { HueRepository } from './repositories';
import { ColorResolver } from './resolvers';
import { SwatchService } from './services';

@Module({
  providers: [HueRepository, ColorResolver, SwatchService],
})
export class SwatchModule {}
