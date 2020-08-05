import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash-es';

import { useQueryParams } from 'shared/hooks';

import { S } from './search-input.styles';

export const SearchInput: React.FC = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ search: string }>();
  const [value, setValue] = useState(queryParams.search);

  useEffect(() => {
    setValue(queryParams.search);
  }, [queryParams.search]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    debounce(() => {
      setQueryParams({ search: target.value || null, page: null });
    }, 500)();

    setValue(target.value);
  };

  return (
    <S.Wrapper
      placeholder="Search"
      onChange={handleChange}
      defaultValue={queryParams.search}
      value={value || ''}
    />
  );
};
