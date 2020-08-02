import React from 'react';

import { S } from './menu.styles';

export interface MenuProps {
  readonly items: string[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => (
  <S.Wrapper>
    {items.map((item) => (
      <S.Item>{item}</S.Item>
    ))}
  </S.Wrapper>
);
