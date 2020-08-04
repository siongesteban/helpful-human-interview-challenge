import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Hue } from './hue.model';
import { SwatchColor } from './swatch-color.model';

@ObjectType()
export class Swatch {
  @Field(() => Int)
  id: number;

  @Field()
  hex: string;

  @Field(() => Hue)
  hue: Hue;

  @Field(() => [SwatchColor])
  colors: SwatchColor[];
}
