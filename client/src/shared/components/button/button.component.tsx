import React from 'react';

import { S } from './button.styles';

export interface ButtonProps {
  readonly fullWidth?: boolean;
  readonly style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  style,
}) => (
  <S.Wrapper fullWidth={fullWidth} style={style}>
    {children}
  </S.Wrapper>
);
