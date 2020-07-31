import { Module } from '@nestjs/common';

import { HueRepository } from './repositories';
import { HueResolver } from './resolvers';
import { SwatchService } from './services';

@Module({
  providers: [HueRepository, HueResolver, SwatchService],
})
export class SwatchModule {}
