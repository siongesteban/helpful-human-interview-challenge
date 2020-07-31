import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { Config } from './shared/config/types';
import { AppModule } from './modules/app';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const configService = await app.get<Config>(ConfigService);

  const port = configService.get<string>('PORT');
  console.log('::port', typeof port, port);
  console.log('::NODE_ENV', configService.get<string>('NODE_ENV'));

  await app.listen(port);
};

bootstrap();
