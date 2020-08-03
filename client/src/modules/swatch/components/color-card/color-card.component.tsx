import React from 'react';

import { S } from './color-card.styles';

export interface ColorCardProps {
  readonly fullWidth?: boolean;
  readonly hex: string;
  readonly small?: boolean;
}

const getHex = (hex: string): string => (hex.startsWith('#') ? hex : `#${hex}`);

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
