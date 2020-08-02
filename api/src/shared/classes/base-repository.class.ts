import { PaginatedList, PaginationParams } from '@shared/types';

interface CreatePaginatedListPayload<T> {
  page: number;
  pageSize: number;
  count: number;
  data: T[];
}

export class BaseRepository<T> {
  protected createPaginationPayload({
    data,
    page,
    pageSize,
    count,
  }: CreatePaginatedListPayload<T>): PaginatedList<T> {
    return {
      meta: {
        page,
        pageSize,
        pageCount: Math.ceil(count / pageSize),
        totalCount: count,
      },
      list: data,
    };
  }

  protected getPaginationOffset({ page, pageSize }: PaginationParams): number {
    return !page ? 0 : (page - 1) * pageSize;
  }
}
