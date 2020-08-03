import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { Button } from 'shared/components';

import { ColorCard, LargeColorCard } from '../../components';

export interface ColorViewPageProps extends RouteComponentProps {
  readonly hex?: string;
}

export const ColorViewPage: React.FC<ColorViewPageProps> = ({ hex = '' }) => (
  <>
    <Grid container spacing={6} justify="center">
      <Grid item xs={12}>
        <LargeColorCard hex={hex} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          {Array.from(Array(5)).map(() => (
            <Grid item xs>
              <ColorCard fullWidth hex="ffc125" />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Button style={{ width: 260 }}>Clear</Button>
      </Grid>
    </Grid>
  </>
);
