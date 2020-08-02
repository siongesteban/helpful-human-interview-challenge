import { join } from 'path';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { SwatchModule } from '@modules/swatch';
import { HueLoaderCreator } from '@modules/swatch/loaders';

export const GraphQLModule = NestGraphQLModule.forRootAsync({
  imports: [SwatchModule],
  useFactory: (hueLoaderCreator: HueLoaderCreator) => ({
    autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.graphql'),
    sortSchema: true,
    context: {
      hueLoader: hueLoaderCreator.create(),
    },
  }),
  inject: [HueLoaderCreator],
});
