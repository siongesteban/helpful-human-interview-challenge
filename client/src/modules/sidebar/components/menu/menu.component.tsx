import React from 'react';

import { useGetHues } from '../../hooks';
import { S } from './menu.styles';

export const Menu: React.FC = () => {
  const { loading, error, data } = useGetHues();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong while fetching the hues.</p>;
  }

  return (
    <S.Wrapper>
      {data?.hues.map(({ id, name }) => (
        <S.Item key={id}>{name}</S.Item>
      ))}
    </S.Wrapper>
  );
};
