import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');

  html, body, #root {
    height: 100%;
  }

  font-family: 'Source Serif Pro', serif;

  button {
    &:focus {
      outline: 0;
    }
  }

  input {
    border: 0;
    outline: 0;
  }
`;

export const S = {
  GlobalStyle,
};
