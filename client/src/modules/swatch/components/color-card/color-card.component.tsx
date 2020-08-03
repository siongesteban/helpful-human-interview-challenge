import React from 'react';

import { S } from './color-card.styles';

export interface ColorCardProps {
  readonly hex: string;
}

const getHex = (hex: string): string => (hex.startsWith('#') ? hex : `#${hex}`);

export const ColorCard: React.FC<ColorCardProps> = ({ hex }) => {
  const finalHex = getHex(hex);

  return (
    <S.Wrapper>
      <S.Color color={finalHex} />
      <S.Label>{finalHex}</S.Label>
    </S.Wrapper>
  );
};
