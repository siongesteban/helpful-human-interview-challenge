import React from 'react';

import { Button } from 'shared/components';

import { Menu } from '../menu';
import { S } from './sidebar.styles';

export const Sidebar: React.FC = () => (
  <S.Wrapper>
    <Button fullWidth>Random Color</Button>
    <Menu />
  </S.Wrapper>
);
