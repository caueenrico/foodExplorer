import styled from "styled-components";
import theme from "../../styles/theme";
import { devicesBreakPoints } from "../../styles/devicesBreakPoints";

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

  @media (min-width:${devicesBreakPoints.NOTEBOOK}){
    padding: 28px 123px;
    gap: 32px
  }

  .orderContainer{
    display: none;
    @media (max-width:${devicesBreakPoints.NOTEBOOK}){
    display: flex;
    }
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

  .logoAdmin{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
       
    width: 100%;

    span{
      font-size: 1.6rem;
      color: ${theme.COLORS.Tints_Cake_200};
      font-weight: 400;
      line-height: 190%;
      
    }
  }

  .logoUser{
    display: flex;
    width: 100%;
    gap: 32px;
    
    justify-content: space-between;
    align-items: center;

    @media (min-width:${devicesBreakPoints.NOTEBOOK}){
      .hamburguer{
        display: none;
      }
    }
  }

  
 
`
export const MenuContainer = styled.div`
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 999;
  position: absolute;
  background:  ${theme.COLORS.Dark_400};


  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
   

  &[data-menu-isOpen="true"]{
    
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out; 
    

  }

  
`

export const SearchContainer = styled.div `
  display: flex;
  justify-content: center;
  
  height: 48px;
  padding: 12px 14px;
  background: ${theme.COLORS.Dark_900};
  gap: 14px;
  border-radius: 8px;
  width: 581px;

 

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

  @media (max-width:${devicesBreakPoints.NOTEBOOK}){
     
        display: none;
     
    }
  

`