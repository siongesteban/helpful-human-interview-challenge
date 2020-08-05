import React from 'react';

import { getHex } from '../../utils';
import { S } from './color-card.styles';

export interface ColorCardProps {
  readonly id: number;
  readonly fullWidth?: boolean;
  readonly hex: string;
  readonly small?: boolean;
  readonly onClick?: (id: number) => void;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  id,
  fullWidth,
  hex,
  small,
  onClick,
}) => {
  const handleClick = (): void => {
    if (onClick) {
      onClick(id);
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
      <S.Label small={small}>{finalHex}</S.Label>
    </S.Wrapper>
  );
};
