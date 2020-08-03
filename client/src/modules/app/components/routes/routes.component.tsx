import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { ColorListPage, ColorViewPage } from 'modules/swatch/pages';

type RouteList = {
  path: string;
  component: React.FC<RouteComponentProps>;
}[];

const ROUTE_LIST: RouteList = [
  {
    path: '/',
    component: ColorListPage,
  },
  {
    path: 'swatches/:hex',
    component: ColorViewPage,
  },
];

export const Routes: React.FC = () => (
  <Router>
    {ROUTE_LIST.map(({ path, component: Route }) => (
      <Route path={path} />
    ))}
  </Router>
);
