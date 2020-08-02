import styled from 'styled-components';

import { ButtonProps } from './button.component';

const getWrapperWidth = ({ fullWidth }: ButtonProps): string | undefined =>
  fullWidth ? '100%' : undefined;

const Wrapper = styled.button<ButtonProps>`
  background: #fff;
  border: 1px solid #363c3c;
  border-radius: 10px;
  color: #363c3c;
  font-size: 24px;
  font-weight: bold;
  height: 60px;
  width: ${getWrapperWidth};
  transition: all 0.2s ease;

  &:hover {
    background: #363c3c;
    color: #fff;
    border-color: #fff;
  }

  &:active {
    background: #1e2323;
  }
`;

export const S = {
  Wrapper,
};
