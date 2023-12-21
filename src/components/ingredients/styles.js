import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.span`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color: ${theme.COLORS.Light_100};
  background: ${theme.COLORS.Dark_1000};
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
`