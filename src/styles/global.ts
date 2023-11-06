import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }

  p{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }
`;
