import styled from "styled-components";
import { devicesBreakPoints } from "../../styles/devicesBreakPoints";

export const Container = styled.button`
  
  align-items: center;
  justify-content: center;

  border: 1px solid red;
  display: none;

  @media (min-width:${devicesBreakPoints.NOTEBOOK}){
    display: flex;
  }

`