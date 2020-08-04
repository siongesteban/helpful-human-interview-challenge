import React from 'react';

import { getHex } from '../../utils';
import { S } from './color-card.styles';

export interface ColorCardProps {
  readonly fullWidth?: boolean;
  readonly hex: string;
  readonly small?: boolean;
  readonly onClick?: (hex: string) => void;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  fullWidth,
  hex,
  small,
  onClick,
}) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick(hex);
    }
  };

  const finalHex = getHex(hex);

  return (
    <S.Wrapper
      isClickable={!!onClick}
      fullWidth={fullWidth}
      onClick={handleClick}
    >
      <S.Color color={finalHex} small={small} />
      <S.Label>{finalHex}</S.Label>
    </S.Wrapper>
  );
};
