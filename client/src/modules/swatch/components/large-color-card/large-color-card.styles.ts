import styled from 'styled-components';

import { ColorCardStyles } from '../color-card';

const Wrapper = styled(ColorCardStyles.Wrapper)`
  border: 1px solid #363c3c;
  width: 100%;
`;

const Color = styled(ColorCardStyles.Color)`
  height: 552px;
`;

const Label = styled(ColorCardStyles.Label)`
  font-size: 48px;
  padding-top: 42px;
  padding-left: 45px;
  padding-bottom: 25px;
`;

export const S = {
  Wrapper,
  Color,
  Label,
};
