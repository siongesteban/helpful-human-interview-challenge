import { navigate, useLocation } from '@reach/router';
import queryString, { ParsedQuery } from 'query-string';

type SetQueryParams = (newQueryParams: Record<string, any>) => void;

type UseQueryParams = <T>() => {
  queryParams: T;
  setQueryParams: SetQueryParams;
};

export const useQueryParams: UseQueryParams = <T = ParsedQuery>() => {
  const { search } = useLocation();

  const queryParams = (queryString.parse(search) as unknown) as T;

  const setQueryParams: SetQueryParams = (newQueryParams) => {
    const newStringifiedQueryParams = queryString.stringify(
      {
        ...queryParams,
        ...newQueryParams,
      },
      { skipNull: true },
    );

    navigate(`?${newStringifiedQueryParams}`);
  };

  return { queryParams, setQueryParams };
};
