import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Grid from '@material-ui/core/Grid';

import { Pagination } from 'shared/components';

import { ColorList } from '../../components';
import { useGetPaginatedSwatchesStore } from '../../hooks';

export const ColorListPage: React.FC<RouteComponentProps> = () => {
  const paginatedSwatchesStore = useGetPaginatedSwatchesStore();

  const renderPagination = (): JSX.Element | null => {
    if (!paginatedSwatchesStore) {
      return null;
    }

    const {
      meta: { pageCount },
    } = paginatedSwatchesStore;

    return (
      <Grid container justify="center" style={{ marginTop: 75 }}>
        <Grid item>
          <Pagination pageCount={pageCount} />
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <ColorList />
      {renderPagination()}
    </>
  );
};
