import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: ${theme.COLORS.Dark_400};
    color: ${theme.COLORS.Light_100};
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover , a:hover {
   filter: brightness(0.9)
  }

`;
