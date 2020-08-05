import React from 'react';
import { range } from 'lodash-es';

import { useQueryParams } from 'shared/hooks';

import { S } from './pagination.styles';

export interface PaginationProps {
  readonly pageCount: number;
}

export interface ItemProps {
  readonly pageNumber: number;
  readonly onClick: (pageNumber: number) => void;
}

const Item: React.FC<ItemProps> = ({ pageNumber, onClick }) => {
  const handleClick = (): void => {
    onClick(pageNumber);
  };

  return <S.Number onClick={handleClick}>{pageNumber}</S.Number>;
};

export const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
  const { setQueryParams } = useQueryParams();

  const handleClick = (pageNumber: number): void => {
    setQueryParams({ page: pageNumber });
  };

  return (
    <S.Wrapper>
      {range(1, pageCount + 1).map((_, i) => (
        <Item pageNumber={i + 1} onClick={handleClick} />
      ))}
    </S.Wrapper>
  );
};
