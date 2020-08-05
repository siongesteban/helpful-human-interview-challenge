import { useQuery, gql } from '@apollo/client';

import { PaginatedSwatches } from 'shared/types';

const GET_TOTAL_COUNT_OF_SWATCHES = gql`
  query GetTotalCountOfSwatches {
    paginatedSwatches {
      meta {
        totalCount
      }
    }
  }
`;

export const useGetTotalCountOfSwatches = () => {
  const result = useQuery<{ paginatedSwatches: PaginatedSwatches }>(
    GET_TOTAL_COUNT_OF_SWATCHES,
  );

  return result.data?.paginatedSwatches.meta.totalCount || 0;
};
