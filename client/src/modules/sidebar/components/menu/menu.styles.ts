import styled from 'styled-components';

interface ItemProps {
  isActive?: boolean;
}

const getItemTextDecoration = ({ isActive }: ItemProps): string | undefined =>
  isActive ? 'underline' : undefined;

const Wrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li<ItemProps>`
  cursor: pointer;
  color: #363c3c;
  font-size: 28px;
  line-height: 50px;
  text-decoration: ${getItemTextDecoration};

  &:hover {
    text-decoration: underline;
  }
`;

export const S = {
  Wrapper,
  Item,
};
