import { PaginationParams } from '@shared/types';

export const getPaginationOffset = ({
  page,
  pageSize,
}: PaginationParams): number => (!page ? 0 : (page - 1) * pageSize);
