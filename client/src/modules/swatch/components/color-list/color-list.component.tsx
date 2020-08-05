import React from 'react';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { useQueryParams } from 'shared/hooks';

import { useGetPaginatedSwatches } from '../../hooks';
import { ColorCard } from '../color-card';

interface ItemProps {
  readonly id: number;
  readonly hex: string;
  readonly onClick: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, hex, onClick }) => (
  <Grid item xs={12} md={4} lg={3} xl={2}>
    <ColorCard fullWidth id={id} hex={hex} onClick={onClick} />
  </Grid>
);

export const ColorList: React.FC = () => {
  const { queryParams } = useQueryParams<
    Record<'hue' | 'search' | 'page', string>
  >();

  const { hue, search, page } = queryParams;

  const { loading, error, data } = useGetPaginatedSwatches({
    color: hue,
    query: search,
    page: page ? Number(queryParams.page) : 1,
    pageSize: 12,
  });

  if (loading || !data) {
    return null;
  }

  if (error) {
    return <p>Something went wrong while fetching swatches.</p>;
  }

  const handleItemClick = (id: number): void => {
    navigate(`/swatches/${id}`);
  };

  return (
    <Grid container spacing={6}>
      {data.paginatedSwatches.list.map(({ id, hex }) => (
        <Item id={id} hex={hex} onClick={handleItemClick} />
      ))}
    </Grid>
  );
};
