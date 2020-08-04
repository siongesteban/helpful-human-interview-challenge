import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { LocationProvider } from '@reach/router';

import { apolloClient } from 'shared/clients';

import { Layout } from '../layout';
import { S } from './app.styles';

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <LocationProvider>
      <S.GlobalStyle />
      <Layout />
    </LocationProvider>
  </ApolloProvider>
);
