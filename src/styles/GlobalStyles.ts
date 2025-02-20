import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: white;
    color: #333;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
      Oxygen, Ubuntu, Cantarell, sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  input {
    font-family: inherit;
  }
`;
