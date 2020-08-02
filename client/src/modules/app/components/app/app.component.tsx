import React from 'react';

import { Header } from 'modules/header/components';

import { S } from './app.styles';

export const App: React.FC = () => (
  <>
    <S.GlobalStyle />
    <Header />
    <p>
      The <strong>quick brown fox</strong> jumps over the lazy dog
    </p>
  </>
);
