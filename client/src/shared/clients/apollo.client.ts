import { InMemoryCache, ApolloClient, gql } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});