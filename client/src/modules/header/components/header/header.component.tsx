import React from 'react';

import { ReactComponent as Logo } from 'shared/assets/svg/logo.svg';

import { SearchInput } from '../search-input';
import { S } from './header.styles';

export const Header: React.FC = () => (
  <S.Wrapper>
    <Logo />
    <SearchInput />
  </S.Wrapper>
);
