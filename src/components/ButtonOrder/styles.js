import styled from "styled-components";
import theme from "../../styles/theme";
import { devicesBreakPoints } from "../../styles/devicesBreakPoints";

export const Container = styled.button`
  align-items: center;
  justify-content: center;
  background: ${theme.COLORS.Tints_Tomato_100}!important;
  border-radius: 8px;
  width: 216px;
  height: 56px;
  gap: 6px;

  color: ${theme.COLORS.Light_100};
  display: none;

  @media (min-width:${devicesBreakPoints.NOTEBOOK}){
    display: flex;
  }

`