import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid ${theme.COLORS.Dark_1000} ;
  margin-top: 36px;

  button {
    color: ${theme.COLORS.Light_300};
    font-family: "Poppins",sans-serif;
    font-size: 2.4rem;
    font-weight: 300;
    text-align: left;
    background: transparent;
    border: none;
    width: 100%;
  }

`