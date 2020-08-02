import React from 'react';

import { Header } from 'modules/header/components';
import { Sidebar } from 'modules/sidebar/components';

import { S } from './layout.styles';

export const Layout: React.FC = () => (
  <>
    <Header />
    <S.Page>
      <Sidebar />
      <S.Content>
        <h1>Content</h1>
      </S.Content>
    </S.Page>
  </>
);
