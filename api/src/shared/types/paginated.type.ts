export interface Paginated<T> {
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
  };
  nodes: T[];
}
