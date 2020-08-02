import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional, Min } from 'class-validator';

@ArgsType()
export class GetPaginatedShadesArgs {
  @Field(() => Int, { nullable: true })
  @Min(1)
  @IsOptional()
  page?: number;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @IsOptional()
  pageSize?: number;
}
