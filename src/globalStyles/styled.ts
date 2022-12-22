import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@300&display=swap');

  body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Anek Latin', sans-serif;
  }
`;
