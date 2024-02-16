import styled from "styled-components";
import theme from "../../styles/theme";

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;

  
  img{
    height: 72px;
  }

  .information{
    display: flex;
    flex-direction: column;
      
    width: 100%;
   
    gap: 6px;
    span{
      font-size: small;
      color: ${theme.COLORS.Light_500};
    }
  }

  button{
    background: transparent;
    border: none;
    color: ${theme.COLORS.Tints_Tomato_300};
    text-align: start;
  }

  
`