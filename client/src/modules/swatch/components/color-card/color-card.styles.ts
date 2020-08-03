import styled from 'styled-components';

interface WrapperProps {
  readonly fullWidth?: boolean;
}

interface ColorProps {
  readonly color: string;
  readonly small?: boolean;
}

const getWrapperWidth = ({ fullWidth }: WrapperProps): string =>
  fullWidth ? '100%' : '220px';

const getColorBackground = ({ color }: ColorProps): string => color;

const getColorHeight = ({ small }: ColorProps): number => (small ? 175 : 218);

const Wrapper = styled.div<WrapperProps>`
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
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
