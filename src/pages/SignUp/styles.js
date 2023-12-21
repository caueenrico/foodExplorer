import styled from "styled-components";
import theme from "../../styles/theme";
import { devicesBreakPoints } from "../../styles/devicesBreakPoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 65px 47px;



    @media (min-width: ${devicesBreakPoints.NOTEBOOK}){
      display: flex;
      flex-direction: row;
      
      align-items: center;
      justify-content: space-around;
    }
`
export const Headers = styled.div`
  display: flex;
  align-items: center;
  gap: 10.739px;
  font-size: 3.7243rem;
  font-weight: 700;
  margin-bottom: 73px;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2{
    display: none;
  }

  a {
   color: ${theme.COLORS.Light_100} ;
   font-family: "Poppins";
  
   text-align: center;
  }

  @media (min-width: ${devicesBreakPoints.NOTEBOOK}){

    background: ${theme.COLORS.Dark_700};
    padding: 64px;
    border-radius: 8px;

    input {
      width: 348px;
      border: 1px solid ${theme.COLORS.Light_100}
    }

    h2{
      display: inline;
      font-family: "Poppins";
      text-align: center;
      font-weight: 500;
      font-size: 3.2rem;
    }
  }
  
`