import React from 'react';

import { useQueryParams } from 'shared/hooks';

import { useGetHues } from '../../hooks';
import { S } from './menu.styles';

interface ItemProps {
  readonly name: string;
}

const Item: React.FC<ItemProps> = ({ name }) => {
  const { setQueryParams } = useQueryParams();

  const handleClick = (): void => {
    setQueryParams({ hue: name.toLowerCase() });
  };

  return (
    <S.Item key={name} onClick={handleClick}>
      {name}
    </S.Item>
  );
};

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
      {data?.hues.map(({ name }) => (
        <Item name={name} />
      ))}
    </S.Wrapper>
  );
};
