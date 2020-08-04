import { useQuery, gql } from '@apollo/client';

import { PaginatedSwatches, QueryPaginatedSwatchesArgs } from 'shared/types';

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
        hex
        hue {
          name
        }
      }
    }
  }
`;

export const useGetPaginatedSwatches = (args: QueryPaginatedSwatchesArgs) =>
  useQuery<{ paginatedSwatches: PaginatedSwatches }>(GET_PAGINATED_SWATCHES, {
    variables: args,
  });
