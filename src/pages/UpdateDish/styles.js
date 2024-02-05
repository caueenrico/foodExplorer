import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  margin: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-left: 32px;
  padding-right: 32px;
  
  
  justify-content: center;
  width: 100%;
  
  
a {
     width: 100%;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: ${theme.COLORS.Light_300};
    
    font-size: 1.6546rem;
    font-weight: 500;
  }

  h1{
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    text-align: center;
    font-family: Poppins;
    text-align: left;
    margin-bottom: 36.92px;
  }

  

`

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
 
  span{
    color: ${theme.COLORS.Light_400};
    
  }

  label{
    margin-top: 16px;
    display: flex;
    cursor: pointer;
    gap: 8px;
    background: ${theme.COLORS.Dark_900};
    padding: 12px 32px;
    align-items: center;
    font-size: 1.4rem;
    font-family: Poppins;
    border-radius: 8px;
    
  
    input{
      display: none;
    }

    svg {
      width: 24px;
      height: 24px;
      color: ${theme.COLORS.Light_100}
    }
  }

  select {
      border: none;
      -webkit-appearance: none;
      cursor: pointer;
      position: relative;
      
      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: 0.8rem;
      
      background: ${theme.COLORS.Dark_900};
      color: ${theme.COLORS.Light_100};
    
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }

    svg {
      color: ${theme.COLORS.GRAY_100};
     
      
      top: 0;
      right: 1.6rem;

      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }

    .botao-salvar{
      margin-bottom: 53px;
      background: ${theme.COLORS.Tints_Tomato_400};
    }

    .botao-excluir{
      margin-bottom: 53px;
      background: ${theme.COLORS.Dark_800};
    }

    .containerButton{
      display: flex;
      gap: 32px;
    }

`

export const ContainerIngredients = styled.div`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    cursor: pointer;
    gap: 8px;
    background: ${theme.COLORS.Dark_900};
    padding: 12px 32px;
    align-items: center;
    font-size: 1.4rem;
    font-family: Poppins;
    border-radius: 8px;
`