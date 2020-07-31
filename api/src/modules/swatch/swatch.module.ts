import { Module } from '@nestjs/common';

import { ColorResolver } from './resolvers';

@Module({
  providers: [ColorResolver],
})
export class SwatchModule {}
