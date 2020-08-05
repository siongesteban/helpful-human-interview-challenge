import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Number = styled.span`
  cursor: pointer;
  font-size: 24px;
  margin: 0 15px;

  &:hover {
    text-decoration: underline;
  }
`;

export const S = {
  Wrapper,
  Number,
};
