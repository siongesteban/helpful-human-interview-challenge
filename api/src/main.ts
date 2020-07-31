import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

import { AppModule } from './modules/app';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT);
};

bootstrap();
