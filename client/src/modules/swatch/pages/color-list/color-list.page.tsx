import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { ColorCard } from '../../components';

export const ColorListPage: React.FC<RouteComponentProps> = () => (
  <Grid container spacing={6}>
    {Array.from(Array(12)).map(() => (
      <Grid item xs={6} md={4} lg={2}>
        <ColorCard hex="ffc125" />
      </Grid>
    ))}
  </Grid>
);
