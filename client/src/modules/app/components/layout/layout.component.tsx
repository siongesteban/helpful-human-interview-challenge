import React from 'react';

import { Header } from 'modules/header/components';
import { Sidebar } from 'modules/sidebar/components';

import { Routes } from '../routes';
import { S } from './layout.styles';

export const Layout: React.FC = () => (
  <>
    <Header />
    <S.Page>
      <Sidebar />
      <S.Content>
        <Routes />
      </S.Content>
    </S.Page>
  </>
);
