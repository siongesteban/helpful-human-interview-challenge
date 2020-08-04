import React from 'react';

import { useGetHues } from '../../hooks';
import { S } from './menu.styles';

export interface MenuProps {
  readonly items: string[];
}

export const Menu: React.FC<MenuProps> = ({ items }) => {
  const { loading, error, data } = useGetHues();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Oops. Something went wrong :(</p>;
  }

  return (
    <S.Wrapper>
      {data?.hues.map(({ id, name }) => (
        <S.Item key={id}>{name}</S.Item>
      ))}
    </S.Wrapper>
  );
};
