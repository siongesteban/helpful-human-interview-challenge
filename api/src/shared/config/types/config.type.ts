import { ConfigService } from '@nestjs/config';

import { BaseConfig } from './base-config.type';

export type Config = ConfigService<BaseConfig>;
