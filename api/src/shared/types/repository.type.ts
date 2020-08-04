import { PaginatedList } from './paginated-list.type';
import { PaginationParams } from './pagination-params.type';

export interface Repository<T> {
  getById?(id: number): Promise<T | null>;
  getAll?(): Promise<T[]>;
  getPaginatedList?(params: PaginationParams): Promise<PaginatedList<T>>;
  getMany?(): Promise<T[]>;
}
