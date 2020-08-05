import React from 'react';
import { navigate } from '@reach/router';
import { random } from 'lodash-es';

import { Button } from 'shared/components';

import { useGetPaginatedSwatchesStore } from 'modules/swatch/hooks';

export const RandomColorButton: React.FC = () => {
  const paginatedSwatchesStore = useGetPaginatedSwatchesStore();
  const totalNumberOfSwatches = paginatedSwatchesStore?.meta.totalCount;

  const handleClick = (): void => {
    const randomSwatchId = random(1, totalNumberOfSwatches || 1);

    navigate(`/swatches/${randomSwatchId}`);
  };

  return (
    <Button disabled={!totalNumberOfSwatches} fullWidth onClick={handleClick}>
      Random Color
    </Button>
  );
};
