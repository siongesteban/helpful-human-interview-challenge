import React from 'react';
import { navigate } from '@reach/router';

import { useQueryParams } from 'shared/hooks';

import { useGetHues } from '../../hooks';
import { S } from './menu.styles';

interface ItemProps {
  readonly isActive: boolean;
  readonly name: string;
  readonly onClick: (name: string) => void;
}

const Item: React.FC<ItemProps> = ({ isActive, name, onClick }) => {
  const handleClick = (): void => {
    onClick(name);
  };

  return (
    <S.Item key={name} isActive={isActive} onClick={handleClick}>
      {name}
    </S.Item>
  );
};

export const Menu: React.FC = () => {
  const { loading, error, data } = useGetHues();
  const { queryParams, setQueryParams } = useQueryParams<{ hue: string }>();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong while fetching the hues.</p>;
  }

  const isActive = (name: string): boolean =>
    name.toLowerCase() === queryParams.hue;

  const handleClick = (name: string): void => {
    navigate('/');
    setQueryParams({ hue: isActive(name) ? null : name.toLowerCase() });
  };

  return (
    <S.Wrapper>
      {data?.hues.map(({ name }) => (
        <Item isActive={isActive(name)} name={name} onClick={handleClick} />
      ))}
    </S.Wrapper>
  );
};
