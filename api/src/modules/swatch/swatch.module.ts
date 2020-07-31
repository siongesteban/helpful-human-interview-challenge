import { Module } from '@nestjs/common';

import { ColorRepository } from './repositories';
import { ColorResolver } from './resolvers';
import { SwatchService } from './services';

@Module({
  providers: [ColorRepository, ColorResolver, SwatchService],
})
export class SwatchModule {}
