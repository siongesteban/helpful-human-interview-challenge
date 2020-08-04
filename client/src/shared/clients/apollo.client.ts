import { InMemoryCache, ApolloClient } from '@apollo/client';

import { paginatedSwatchesStore } from 'modules/swatch/stores';

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        paginatedSwatchesStore: {
          read() {
            return paginatedSwatchesStore();
          },
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: apolloCache,
});
