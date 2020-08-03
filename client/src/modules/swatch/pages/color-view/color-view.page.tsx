import React from 'react';
import { RouteComponentProps } from '@reach/router';

export interface ColorViewPageProps extends RouteComponentProps {
  readonly hex?: string;
}

export const ColorViewPage: React.FC<ColorViewPageProps> = ({ hex }) => (
  <h1>Color View - {hex}</h1>
);
