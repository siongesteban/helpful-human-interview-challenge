import { PaginationParams } from '@shared/types';

export type ShadePaginationParams = Partial<
  PaginationParams & {
    query?: string;
  }
>;
