import { PaginatedList, PaginationParams } from '@shared/types';

interface CreatePaginatedListPayload<T> {
  page: number;
  pageSize: number;
  count: number;
  data: T[];
}

export class BaseRepository<T> {
  protected defaultPage = 1;
  protected defaultPageSize = 10;

  protected getPage(page?: number): number {
    return page || this.defaultPage;
  }

  protected getPageSize(pageSize?: number): number {
    return pageSize || this.defaultPageSize;
  }

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
