export interface PaginatedList<T> {
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
  };
  list: T[];
}
