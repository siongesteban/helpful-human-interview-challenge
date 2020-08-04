import React, { useState } from 'react';
import { debounce } from 'lodash-es';

import { useQueryParams } from 'shared/hooks';

import { S } from './search-input.styles';

export const SearchInput: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ search: string }>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    debounce(() => {
      setQueryParams({ search: target.value || null });
    }, 500)();
  };

  return (
    <S.Wrapper
      placeholder="Search"
      onChange={handleChange}
      defaultValue={queryParams.search}
    />
  );
};
