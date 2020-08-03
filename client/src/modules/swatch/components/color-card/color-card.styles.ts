import styled from 'styled-components';

interface ColorProps {
  color: string;
}

const getColorBackground = ({ color }: ColorProps): string => color;

const Wrapper = styled.div`
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  width: 220px;
`;

const Color = styled.div<ColorProps>`
  background: ${getColorBackground};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 218px;
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
