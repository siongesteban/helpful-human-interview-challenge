import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');

  font-family: 'Source Serif Pro', serif;
`;

export const S = {
  GlobalStyle,
};
