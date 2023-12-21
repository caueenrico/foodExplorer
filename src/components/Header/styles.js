import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.header`
  width: 100%;
  height: 114px;
  background: ${theme.COLORS.Dark_700};
  gap: 16px;

  display: flex;
  align-items: center;
  padding: 28px;

  h1{
    font-size: 2.1163rem;
  }

  button {
    background: transparent;
    border: none
  }

  .receipt {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;


    width: 20px;
    height: 20px;
    padding: 12px;

  
    background: ${theme.COLORS.Tints_Tomato_100};
    z-index: 1;
    border-radius: 99px;
    
    right: 20px;
    top: 32px;
    
  }
 
`
export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 999;
  position: fixed;
  background:  ${theme.COLORS.Dark_400};
`