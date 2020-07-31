import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hue {
  @Field(() => Int)
  id: number;

  @Field({ description: 'Name of the color hue.' })
  name: string;
}
