import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useQueryParams } from 'shared/hooks';

import { useGetPaginatedSwatches } from '../../hooks';
import { ColorCard } from '../color-card';

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

  return (
    <Grid container spacing={6}>
      {data?.paginatedSwatches.list.map(({ hex }) => (
        <Grid item xs={6} md={4} lg={2}>
          <ColorCard hex={hex} />
        </Grid>
      ))}
    </Grid>
  );
};
