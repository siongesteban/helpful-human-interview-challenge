import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Swatch } from './swatch.model';

@ObjectType()
export class SwatchColor {
  @Field(() => Int)
  id: number;

  @Field()
  hex: string;

  @Field(() => Swatch)
  swatch: Swatch;
}
