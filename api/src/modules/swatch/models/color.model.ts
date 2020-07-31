import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field({ description: 'Name of the color.' })
  name: string;
}
