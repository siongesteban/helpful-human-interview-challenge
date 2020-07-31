import * as Joi from '@hapi/joi';

import { EnvKeys } from './types';

const schema: Record<EnvKeys, Joi.AnySchema> = {
  NODE_ENV: Joi.string()
    .valid('local', 'development', 'test', 'production')
    .required(),
  PORT: Joi.number().default(8080),
};

export const configValidationSchema = Joi.object(schema);
