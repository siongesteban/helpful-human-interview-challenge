import { useQuery, gql } from '@apollo/client';

import { QuerySwatchArgs, Swatch } from 'shared/types';

const GET_SWATCH = gql`
  query GetSwatch($id: Int!) {
    swatch(id: $id) {
      id
      hex
      colors {
        hex
      }
    }
  }
`;

export const useGetSwatch = (args: QuerySwatchArgs) =>
  useQuery<{ swatch: Swatch }>(GET_SWATCH, {
    variables: args,
  });
