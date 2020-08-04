import { useQuery, gql } from '@apollo/client';

import { PaginatedSwatches } from 'shared/types';

const GET_PAGINATED_SWATCHES = gql`
  query GetPaginatedSwatches {
    paginatedSwatches(pageSize: 12) {
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

export const useGetPaginatedSwatches = () =>
  useQuery<{ paginatedSwatches: PaginatedSwatches }>(GET_PAGINATED_SWATCHES);
