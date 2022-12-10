import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey_30};

    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.dark_10}
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.dark_00}
  }

`;

export default GlobalStyle;
