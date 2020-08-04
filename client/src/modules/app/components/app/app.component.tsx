import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from 'shared/clients';

import { Layout } from '../layout';
import { S } from './app.styles';

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <S.GlobalStyle />
    <Layout />
  </ApolloProvider>
);
