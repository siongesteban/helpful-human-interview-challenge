import { Field, ObjectType } from '@nestjs/graphql';

import { PaginatedList } from '@shared/models';

import { Swatch } from './swatch.model';

@ObjectType()
export class PaginatedSwatches extends PaginatedList<Swatch> {
  @Field(() => [Swatch])
  list: Swatch[];
}
