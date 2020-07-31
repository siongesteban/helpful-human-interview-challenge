import { Module } from '@nestjs/common';

import { ConfigModule } from '../../shared/config';
import { GraphQLModule } from '../../shared/graphql';

import { SwatchModule } from '../swatch';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, GraphQLModule, SwatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
