import React from 'react';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { useQueryParams } from 'shared/hooks';

import { useGetPaginatedSwatches } from '../../hooks';
import { ColorCard } from '../color-card';

interface ItemProps {
  readonly hex: string;
  readonly onClick: (hex: string) => void;
}

const Item: React.FC<ItemProps> = ({ hex, onClick }) => (
  <Grid item xs={6} md={4} lg={2}>
    <ColorCard hex={hex} onClick={onClick} />
  </Grid>
);

export const ColorList: React.FC = () => {
  const { queryParams } = useQueryParams<{ hue: string; search: string }>();

  const { loading, error, data } = useGetPaginatedSwatches({
    color: queryParams.hue,
    query: queryParams.search,
    page: 1,
    pageSize: 6,
  });

  if (loading) {
    return null;
  }

  if (error) {
    return <p>Something went wrong while fetching swatches.</p>;
  }

  const handleItemClick = (hex: string): void => {
    navigate(`swatches/${hex}`);
  };

  return (
    <Grid container spacing={6}>
      {data?.paginatedSwatches.list.map(({ id, hex }) => (
        <Item hex={hex} onClick={handleItemClick} />
      ))}
    </Grid>
  );
};
