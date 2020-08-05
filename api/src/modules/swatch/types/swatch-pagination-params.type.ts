import { PaginationParams } from '@shared/types';

export type SwatchPaginationParams = Partial<
  PaginationParams & {
    query: string;
    color: string;
  }
>;
