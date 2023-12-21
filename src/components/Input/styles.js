import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.COLORS.Light_400};

  input {
    border: none;
    background: ${theme.COLORS.Dark_900};
    color: ${theme.COLORS.Light_200};
    padding: 14px 12px;
    margin-top: 8px;
    border-radius: 8px;
  }


`;
