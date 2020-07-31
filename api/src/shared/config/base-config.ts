import { BaseConfig } from './types';

export const baseConfig = (): BaseConfig => ({
  PORT: parseInt(process.env.PORT, 10),
});
