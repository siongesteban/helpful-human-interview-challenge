import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Swatch } from './swatch.model';

@ObjectType()
export class Hue {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Swatch])
  swatches: Swatch[];
}
