import React from 'react';
import { range } from 'lodash-es';

import { useQueryParams } from 'shared/hooks';

import { S } from './pagination.styles';

export interface PaginationProps {
  readonly currentPageNumber: number;
  readonly pageCount: number;
}

export interface ItemProps {
  readonly active: boolean;
  readonly pageNumber: number;
  readonly onClick: (pageNumber: number) => void;
}

const Item: React.FC<ItemProps> = ({ active, pageNumber, onClick }) => {
  const handleClick = (): void => {
    onClick(pageNumber);
  };

  return (
    <S.Number active={active} onClick={handleClick}>
      {pageNumber}
    </S.Number>
  );
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPageNumber,
  pageCount,
}) => {
  const { setQueryParams } = useQueryParams();

  if (pageCount <= 1) {
    return null;
  }

  const handleClick = (pageNumber: number): void => {
    setQueryParams({ page: pageNumber });
  };

  const renderItems = (): JSX.Element[] =>
    range(1, pageCount + 1).map((_, i) => {
      const pageNumber = i + 1;
      const active = pageNumber === currentPageNumber;

      return (
        <Item active={active} pageNumber={pageNumber} onClick={handleClick} />
      );
    });

  return <S.Wrapper>{renderItems()}</S.Wrapper>;
};
