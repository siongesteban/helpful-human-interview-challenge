import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { baseConfig } from './base-config';

export const ConfigModule = NestConfigModule.forRoot({
  isGlobal: true,
  load: [baseConfig],
});
