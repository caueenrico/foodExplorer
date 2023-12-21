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

  .heart{
    position: absolute;
    right: 16px;
    top: 16px;
    width: 24px;
    height: 22px;
    padding: 0;
    background: transparent;

    img {
      width: 24px;
      height: 22px;
  }
    
  }

  a{
    font-family: Poppins;
    font-size: 1.4rem;
    text-decoration: none;
    color: ${theme.COLORS.Light_100};
    display: flex;
    align-items: center;

    
  }

  span{
    color: ${theme.COLORS.Tints_Cake_200};
  }

  button {
    width: 100%;
    height: 32px;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    background: ${theme.COLORS.Tints_Tomato_100};

    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.COLORS.Light_100};

  }

  .Count{
    display: flex;
    gap: 14px;

    button{
      background: transparent;
      
      padding: 0;
      height: 24px;
      width: 24px;

      img{
        height: 24px;
      }
    }
    span {
      color: ${theme.COLORS.Light_100};
    }
  }
`