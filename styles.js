import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --primary-background: #f5a623;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;

