import { Paginated } from '@shared/types';

interface CreatePaginatedListPayload<T> {
  page: number;
  pageSize: number;
  count: number;
  data: T[];
}

export const createPaginatedList = <T>({
  data,
  page,
  pageSize,
  count,
}: CreatePaginatedListPayload<T>): Paginated<T> => ({
  meta: {
    page,
    pageSize,
    pageCount: Math.ceil(count / pageSize),
    totalCount: count,
  },
  nodes: data,
});
