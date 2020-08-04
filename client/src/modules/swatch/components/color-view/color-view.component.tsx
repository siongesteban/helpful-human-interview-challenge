import React from 'react';
import { navigate, RouteComponentProps } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { Button } from 'shared/components';

import { useGetSwatch } from '../../hooks';
import { ColorCard } from '../color-card';
import { LargeColorCard } from '../large-color-card';

interface ColorViewProps {
  swatchId: number;
}

export const ColorView: React.FC<ColorViewProps> = ({ swatchId }) => {
  const { loading, error, data } = useGetSwatch({ id: swatchId });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong while fetching swatch.</p>;
  }

  if (!data) {
    return null;
  }

  const handleClearButtonClick = (): void => {
    navigate('/');
  };

  const { hex, colors } = data.swatch;

  return (
    <>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12}>
          <LargeColorCard hex={hex} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={6}>
            {colors.map((color) => (
              <Grid item xs>
                <ColorCard id={color.id} fullWidth small hex={color.hex} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Button style={{ width: 260 }} onClick={handleClearButtonClick}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
