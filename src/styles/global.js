import styled, { createGlobalStyle } from "styled-components";

export const WrapperGlobal = styled.div`
  background-color: #b48484;
  padding: 10px;
  height: 100vh;
  width: 100vw;
`;

export const WrapperLists = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;
