import { join } from 'path';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { SwatchModule } from '@modules/swatch';
import {
  HueLoaderCreator,
  SwatchesLoaderCreator,
} from '@modules/swatch/loaders';

export const GraphQLModule = NestGraphQLModule.forRootAsync({
  imports: [SwatchModule],
  useFactory: (
    hueLoaderCreator: HueLoaderCreator,
    swatchesLoaderCreator: SwatchesLoaderCreator,
  ) => ({
    autoSchemaFile: join(process.cwd(), 'src/shared/graphql/schema.graphql'),
    sortSchema: true,
    context: {
      hueLoader: hueLoaderCreator.create(),
      swatchesLoader: swatchesLoaderCreator.create(),
    },
  }),
  inject: [HueLoaderCreator, SwatchesLoaderCreator],
});
