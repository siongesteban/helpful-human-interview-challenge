import React from 'react';
import { useLocation } from '@reach/router';

import { ReactComponent as Logo } from 'shared/assets/svg/logo.svg';

import { SearchInput } from '../search-input';
import { S } from './header.styles';

export const Header: React.FC = () => {
  const showSearchInput = useLocation().pathname === '/';

  return (
    <S.Wrapper>
      <Logo />
      {showSearchInput && <SearchInput />}
    </S.Wrapper>
  );
};
