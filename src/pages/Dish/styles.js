import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  font-family: Poppins, "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 36px;
  gap: 16px;
  width: 316px;

  img{
    display: flex;
    align-items: center;
    height: 264px;
    width: 264px;
  }

  a {
    
    width: 100%;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: ${theme.COLORS.Light_300};
    
    font-size: 2.4rem;
    font-weight: 500;
  }

  h1{
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }

  p{
    text-align: center;
  }

  .Ingredients {
    width: 316px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }


`

export const ButtonArea = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 46px;
  margin-bottom: 55px;
  width: 316px;

`