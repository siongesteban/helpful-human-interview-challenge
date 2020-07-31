import { join } from 'path';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

export const GraphQLModule = NestGraphQLModule.forRoot({
  autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.graphql'),
  sortSchema: true,
});
