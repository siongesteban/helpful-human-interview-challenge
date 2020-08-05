import { useQuery, gql } from '@apollo/client';

import { PaginatedSwatches } from 'shared/types';

const GET_PAGINATED_SWATCHES_STORE = gql`
  query GetPaginatedSwatchesStore {
    paginatedSwatchesStore @client
  }
`;

export const useGetPaginatedSwatchesStore = () => {
  const result = useQuery<{ paginatedSwatchesStore: PaginatedSwatches | null }>(
    GET_PAGINATED_SWATCHES_STORE,
  );

  return result.data?.paginatedSwatchesStore;
};
