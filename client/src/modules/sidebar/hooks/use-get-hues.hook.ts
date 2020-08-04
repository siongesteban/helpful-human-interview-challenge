import { useQuery, gql } from '@apollo/client';

const GET_HUES = gql`
  query GetHues {
    hues {
      id
      name
    }
  }
`;

export const useGetHues = () =>
  useQuery<{ hues: { id: number; name: string }[] }>(GET_HUES);
