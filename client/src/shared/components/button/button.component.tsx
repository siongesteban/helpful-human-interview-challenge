import React from 'react';

import { S } from './button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  ...restProps
}) => (
  <S.Wrapper fullWidth={fullWidth} {...restProps}>
    {children}
  </S.Wrapper>
);
