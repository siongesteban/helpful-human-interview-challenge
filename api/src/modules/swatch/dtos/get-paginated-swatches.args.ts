import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional, Min, MinLength } from 'class-validator';

@ArgsType()
export class GetPaginatedSwatchesArgs {
  @Field({ nullable: true })
  @MinLength(1)
  @IsOptional()
  query?: string;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @IsOptional()
  page?: number;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @IsOptional()
  pageSize?: number;
}
