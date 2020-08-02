import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  cursor: pointer;
  color: #363c3c;
  font-size: 28px;
  line-height: 50px;

  &:hover {
    text-decoration: underline;
  }
`;

export const S = {
  Wrapper,
  Item,
};
