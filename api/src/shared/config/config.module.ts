import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { configValidationSchema } from './config-validation-schema';

export const ConfigModule = NestConfigModule.forRoot({
  isGlobal: true,
  validationSchema: configValidationSchema,
  validationOptions: {
    abortEarly: false,
  },
});
