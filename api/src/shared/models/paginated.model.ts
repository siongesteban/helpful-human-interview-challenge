import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class PaginationMeta {
  @Field(() => Int)
  page: number;

  @Field(() => Int)
  pageSize: number;

  @Field(() => Int)
  pageCount: number;

  @Field(() => Int)
  totalCount: number;
}

@ObjectType()
export abstract class Paginated<T> {
  @Field(() => PaginationMeta)
  meta: PaginationMeta;

  abstract nodes: T[];
}
