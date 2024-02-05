import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
 
  height: 100%;
  width: 100%;
  padding: 0 28px;

  transform: translateX(0%);
  transition: transform 1s ease-in-out;
`;

export const Header = styled.header`
  width: 100%;
  height: 114px;
  background: ${theme.COLORS.Dark_700};
  gap: 16px;

  display: flex;
  align-items: center;

  padding: 28px;

  h1 {
    font-size: 2.1163rem;
    font-family: Roboto, sans-serif;
  }

  img {
    width: 18px;
    height: 18px;
  }

  button {
    border: none;
    background: none;
    display: flex;

    align-items: center;
 
  }

`;

export const SearchContainer = styled.div `
  display: flex;
  justify-content: center;
  
  height: 48px;
  padding: 12px 14px;
  background: ${theme.COLORS.Dark_900};
  gap: 14px;
  border-radius: 8px;

  margin-top: 36px;

 img{
  height: 24px;
  width: 24px;
  }

  input {
    background: transparent;
    border: none;
    width: 100%;
    color:${theme.COLORS.Light_500};
  }

  input::placeholder{
    color: ${theme.COLORS.Light_500};
    font-size: 1.6rem;
    font-weight: 700;
  }

`
