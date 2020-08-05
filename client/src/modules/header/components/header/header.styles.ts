import styled from 'styled-components';

import { ReactComponent as LogoSvg } from 'shared/assets/svg/logo.svg';

const Wrapper = styled.header`
  background: #363c3c;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 30px;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;

export const S = {
  Wrapper,
  Logo,
};
