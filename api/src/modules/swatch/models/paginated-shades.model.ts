import { Field, ObjectType } from '@nestjs/graphql';

import { PaginatedList } from '@shared/models';

import { Shade } from './shade.model';

@ObjectType()
export class PaginatedShades extends PaginatedList<Shade> {
  @Field(() => [Shade])
  list: Shade[];
}
