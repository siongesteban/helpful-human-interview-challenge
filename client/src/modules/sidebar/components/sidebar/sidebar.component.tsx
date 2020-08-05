import React from 'react';

import { Menu } from '../menu';
import { RandomColorButton } from '../random-color-button';
import { S } from './sidebar.styles';

export const Sidebar: React.FC = () => (
  <S.Wrapper>
    <RandomColorButton />
    <Menu />
  </S.Wrapper>
);
