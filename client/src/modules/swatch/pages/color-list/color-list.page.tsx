import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ColorCard } from '../../components';

export const ColorListPage: React.FC<RouteComponentProps> = () => (
  <ColorCard hex="ffc125" />
);
