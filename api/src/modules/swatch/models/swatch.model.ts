import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Hue } from './hue.model';

@ObjectType()
export class Swatch {
  @Field(() => Int)
  id: number;

  @Field()
  hex: string;

  @Field(() => Hue)
  hue: Hue;
}
