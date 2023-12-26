import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  height: 292px;
  width: 210px;
  position: relative;

  background: ${theme.COLORS.Dark_200};
  border-radius: 8px;
  border: 1px solid ${theme.COLORS.Dark_300};

  img {
    height: 88px;
    width: 88px;
  }

  .heart {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 24px;
    height: 22px;
    padding: 0;
    background: transparent;
    border: none;

    img {
      width: 24px;
      height: 22px;
    }
  }

  span {
    color: ${theme.COLORS.Tints_Cake_200};
  }

  .incluir{
  
    height: 32px;
  }

  .Count {
    display: flex;
    gap: 14px;
    width: 100px;

    align-items: center;

    button {
      background: transparent;
      display: flex;
      align-items: center;
        
      padding: 0;
      border: none;
      justify-content: center;
      
      height: 24px;
      width: 24px;
      
      img{
        height: 24px;
        width: 24px;
      }
      
    }
    span {
      color: ${theme.COLORS.Light_100};

    }
  }
`;
