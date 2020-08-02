import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Shade } from './shade.model';

@ObjectType()
export class Hue {
  @Field(() => Int)
  id: number;

  @Field({ description: 'Name of the color hue.' })
  name: string;

  @Field(() => [Shade])
  shades: Shade[];
}
