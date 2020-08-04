import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ColorView } from '../../components';

export interface ColorViewPageProps extends RouteComponentProps {
  readonly swatchId?: string;
}

export const ColorViewPage: React.FC<ColorViewPageProps> = ({ swatchId }) =>
  !swatchId ? null : <ColorView swatchId={Number(swatchId)} />;
