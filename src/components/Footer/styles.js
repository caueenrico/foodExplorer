import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.footer`
  width: 100%;
  height: 77px;
  background: ${theme.COLORS.Dark_600};
  display: flex;
  align-items: center;
  justify-content: space-around ;

  .logo {
    font-size: 1.5262rem;
    font-weight: 700;
    display: flex;
    gap: 6.47px;
    color: ${theme.COLORS.Light_700};
  }

  span {
    font-size: 1.2rem;
    color: ${theme.COLORS.Light_200 };
  }
`