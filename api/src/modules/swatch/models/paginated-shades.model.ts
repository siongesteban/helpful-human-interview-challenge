import { Field, ObjectType } from '@nestjs/graphql';

import { Paginated } from '@shared/models';

import { Shade } from './shade.model';

@ObjectType()
export class PaginatedShades extends Paginated<Shade> {
  @Field(() => [Shade])
  nodes: Shade[];
}
