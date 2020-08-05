import React from 'react';
import { navigate, useLocation } from '@reach/router';

import { SearchInput } from '../search-input';
import { S } from './header.styles';

export const Header: React.FC = () => {
  const showSearchInput = useLocation().pathname === '/';

  const handleLogoClick = (): void => {
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.Logo onClick={handleLogoClick} />
      {showSearchInput && <SearchInput />}
    </S.Wrapper>
  );
};
