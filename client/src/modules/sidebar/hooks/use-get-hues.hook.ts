import { useQuery, gql } from '@apollo/client';

import { Hue } from 'shared/types';

const GET_HUES = gql`
  query GetHues {
    hues {
      id
      name
    }
  }
`;

export const useGetHues = () => useQuery<{ hues: Hue[] }>(GET_HUES);
