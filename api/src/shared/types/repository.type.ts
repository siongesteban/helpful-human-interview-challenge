import { Paginated } from './paginated.type';
import { PaginationParams } from './pagination-params.type';

export interface Repository<T> {
  getAll?(): Promise<T[]>;
  getPaginated?(params: PaginationParams): Promise<Paginated<T>>;
  getMany?(): Promise<T[]>;
}
