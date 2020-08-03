import React from 'react';

import { getHex } from '../../utils';
import { S } from './color-card.styles';

export interface ColorCardProps {
  readonly fullWidth?: boolean;
  readonly hex: string;
  readonly small?: boolean;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  fullWidth,
  hex,
  small,
}) => {
  const finalHex = getHex(hex);

  return (
    <S.Wrapper fullWidth={fullWidth}>
      <S.Color color={finalHex} small={small} />
      <S.Label>{finalHex}</S.Label>
    </S.Wrapper>
  );
};
