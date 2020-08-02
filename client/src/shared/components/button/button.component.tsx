import React from 'react';

import { S } from './button.styles';

export interface ButtonProps {
  readonly fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth }) => (
  <S.Wrapper fullWidth={fullWidth}>{children}</S.Wrapper>
);
