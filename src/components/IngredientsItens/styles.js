import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 10px 16px;
  border-radius: 8px;
  border: ${({isNew })=> isNew ? `1px dashed ${theme.COLORS.Light_500}`: "none"};
  gap: 8px;
  width: auto;
  
  

  background: ${({isNew })=> isNew ? "transparent": theme.COLORS.Light_600};


  > input{
    background: transparent;
    color: ${theme.COLORS.Light_100};
    
    border: none;
    max-width: 70px;
  }

  > button{
    background: transparent;
    border: none;
    color: ${theme.COLORS.Light_100};
    display: flex;
    align-items: center;
  }

  button:hover{
  
  }
`