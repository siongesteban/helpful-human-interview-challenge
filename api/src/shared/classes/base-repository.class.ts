import { Paginated, PaginationParams } from '@shared/types';

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
  }: CreatePaginatedListPayload<T>): Paginated<T> {
    return {
      meta: {
        page,
        pageSize,
        pageCount: Math.ceil(count / pageSize),
        totalCount: count,
      },
      nodes: data,
    };
  }

  protected getPaginationOffset({ page, pageSize }: PaginationParams): number {
    return !page ? 0 : (page - 1) * pageSize;
  }
}
