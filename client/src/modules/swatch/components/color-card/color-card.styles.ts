import styled from 'styled-components';

interface WrapperProps {
  readonly fullWidth?: boolean;
  readonly isClickable?: boolean;
}

interface ColorProps {
  readonly color: string;
  readonly small?: boolean;
}

const getWrapperCursor = ({ isClickable }: WrapperProps): string =>
  isClickable ? 'pointer' : 'default';

const getWrapperWidth = ({ fullWidth }: WrapperProps): string =>
  fullWidth ? '100%' : '220px';

const getColorBackground = ({ color }: ColorProps): string => color;

const getColorHeight = ({ small }: ColorProps): number => (small ? 175 : 218);

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  cursor: ${getWrapperCursor};
  width: ${getWrapperWidth};
`;

const Color = styled.div<ColorProps>`
  background: ${getColorBackground};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: ${getColorHeight}px;
`;

const Label = styled.div`
  background: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #363c3c;
  font-size: 24px;
  padding-top: 22px;
  padding-left: 24px;
  padding-bottom: 4px;
`;

export const S = {
  Wrapper,
  Color,
  Label,
};
