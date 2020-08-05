import styled, { css } from 'styled-components';

interface NumberProps {
  active: boolean;
}

const numberBorderBottom = css`
  border-bottom: 2px solid #363c3c;
`;

const getNumberActiveStyles = ({ active }: NumberProps) =>
  !active
    ? undefined
    : css`
        font-weight: bold;
        ${numberBorderBottom}
      `;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Number = styled.span<NumberProps>`
  cursor: pointer;
  font-size: 24px;
  margin: 0 10px;
  padding: 0 5px;

  &:hover {
    ${numberBorderBottom}
  }

  ${getNumberActiveStyles}
`;

export const S = {
  Wrapper,
  Number,
};
