import React from 'react';
import { RouteComponentProps } from '@reach/router';

export interface ColorViewPageProps extends RouteComponentProps {
  readonly color?: string;
  readonly hex?: string;
}

export const ColorViewPage: React.FC<ColorViewPageProps> = ({ color, hex }) => (
  <h1>
    Color View - {color} {hex}
  </h1>
);
