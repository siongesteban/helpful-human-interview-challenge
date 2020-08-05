import React from 'react';

import { getHex } from '../../utils';
import { S } from './large-color-card.styles';

export interface LargeColorCardProps {
  readonly hex: string;
}

export const LargeColorCard: React.FC<LargeColorCardProps> = ({ hex }) => {
  const finalHex = getHex(hex);

  return (
    <S.Wrapper>
      <S.Color color={finalHex} />
      <S.Label>{finalHex}</S.Label>
    </S.Wrapper>
  );
};
