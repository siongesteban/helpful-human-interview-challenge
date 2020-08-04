import { useQuery, gql } from '@apollo/client';

import { PaginatedSwatches, QueryPaginatedSwatchesArgs } from 'shared/types';

import { paginatedSwatchesStore } from '../stores';

const GET_PAGINATED_SWATCHES = gql`
  query GetPaginatedSwatches(
    $query: String
    $color: String
    $page: Int!
    $pageSize: Int!
  ) {
    paginatedSwatches(
      query: $query
      color: $color
      page: $page
      pageSize: $pageSize
    ) {
      meta {
        page
        pageSize
        pageCount
        totalCount
      }
      list {
        id
        hex
        hue {
          name
        }
      }
    }
  }
`;

export const useGetPaginatedSwatches = (args: QueryPaginatedSwatchesArgs) => {
  const result = useQuery<{ paginatedSwatches: PaginatedSwatches }>(
    GET_PAGINATED_SWATCHES,
    {
      variables: args,
    },
  );

  paginatedSwatchesStore(result.data?.paginatedSwatches);

  return result;
};
