import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.textarea`

  width: 100%;
  height: 150px;

  background-color: ${theme.COLORS.Dark_800};
  color: ${theme.COLORS.Light_100};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;

  padding: 16px;

  &::placeholder {
    color: ${theme.COLORS.Light_500}
  }
`
