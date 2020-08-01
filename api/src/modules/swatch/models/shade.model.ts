import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Hue } from './hue.model';

@ObjectType()
export class Shade {
  @Field(() => Int)
  id: number;

  @Field({ description: 'Hex code of the color.' })
  hex: string;

  @Field({ description: 'Shade number.' })
  number: string;

  @Field(() => Hue)
  hue: Hue;
}
