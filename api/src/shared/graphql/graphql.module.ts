import { join } from 'path';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { SwatchModule } from '@modules/swatch';
import { HueLoaderCreator, ShadesLoaderCreator } from '@modules/swatch/loaders';

export const GraphQLModule = NestGraphQLModule.forRootAsync({
  imports: [SwatchModule],
  useFactory: (
    hueLoaderCreator: HueLoaderCreator,
    shadesLoaderCreator: ShadesLoaderCreator,
  ) => ({
    autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.graphql'),
    sortSchema: true,
    context: {
      hueLoader: hueLoaderCreator.create(),
      shadesLoader: shadesLoaderCreator.create(),
    },
  }),
  inject: [HueLoaderCreator, ShadesLoaderCreator],
});
