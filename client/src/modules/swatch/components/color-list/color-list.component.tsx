import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useGetPaginatedSwatches } from '../../hooks';
import { ColorCard } from '../color-card';

export const ColorList: React.FC = () => {
  const { loading, error, data } = useGetPaginatedSwatches();

  if (loading) {
    return <p>Loading...</p>;
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
