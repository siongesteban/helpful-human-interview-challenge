import React from 'react';
import { navigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { Pagination } from 'shared/components';
import { useQueryParams } from 'shared/hooks';

import { useGetPaginatedSwatches } from '../../hooks';
import { ColorCard } from '../color-card';

interface ItemProps {
  readonly id: number;
  readonly hex: string;
  readonly onClick: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ id, hex, onClick }) => (
  <Grid item xs={6} md={4} lg={2}>
    <ColorCard id={id} hex={hex} onClick={onClick} />
  </Grid>
);

export const ColorList: React.FC = () => {
  const { queryParams } = useQueryParams<{ hue: string; search: string }>();

  const { loading, error, data } = useGetPaginatedSwatches({
    color: queryParams.hue,
    query: queryParams.search,
    page: 1,
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

  const { list, meta } = data.paginatedSwatches;

  return (
    <>
      <Grid container spacing={6}>
        {list.map(({ id, hex }) => (
          <Item id={id} hex={hex} onClick={handleItemClick} />
        ))}
      </Grid>
      <Grid container justify="center" style={{ marginTop: 75 }}>
        <Grid item>
          <Pagination pageCount={meta.pageCount} />
        </Grid>
      </Grid>
    </>
  );
};
