import { Module } from '@nestjs/common';

import { ConfigModule } from '@shared/config';
import { GraphQLModule } from '@shared/graphql';
import { PrismaModule } from '@shared/prisma';

import { SwatchModule } from '@modules/swatch';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, GraphQLModule, PrismaModule, SwatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
