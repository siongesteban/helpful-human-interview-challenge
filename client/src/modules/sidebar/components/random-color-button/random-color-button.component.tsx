import React from 'react';
import { navigate } from '@reach/router';
import { random } from 'lodash-es';

import { Button } from 'shared/components';

import { useGetTotalCountOfSwatches } from 'modules/swatch/hooks';

export const RandomColorButton: React.FC = () => {
  const totalCountOfSwatches = useGetTotalCountOfSwatches();

  const handleClick = (): void => {
    const randomSwatchId = random(1, totalCountOfSwatches);

    navigate(`/swatches/${randomSwatchId}`);
  };

  return (
    <Button disabled={!totalCountOfSwatches} fullWidth onClick={handleClick}>
      Random Color
    </Button>
  );
};
