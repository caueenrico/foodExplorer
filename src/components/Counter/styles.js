import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 14px;
    width: 112px;


    button{
      background: transparent;
      border: none;
      
      padding: 0;
      height: 24px;
      width: 24px;

      img{
        height: 24px;
      }
    }
    span {
      color: ${theme.COLORS.Light_100};
      font-weight: 700;
      font-size: 2.2626rem;
    }
 
`