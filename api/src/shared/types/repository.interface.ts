export interface Repository<T> {
  getByID(id: number): Promise<T | null>;
}
