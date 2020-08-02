import React from 'react';

import { Header } from 'modules/header/components';
import { Sidebar } from 'modules/sidebar/components';

import { S } from './app.styles';

export const App: React.FC = () => (
  <>
    <S.GlobalStyle />
    <Header />
    <Sidebar />
  </>
);
