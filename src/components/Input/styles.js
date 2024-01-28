import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.COLORS.Light_400};
  gap: 16px;

  span{
    color: ${theme.COLORS.Light_400};

  }

  input {
    border: none;
    background: transparent;
    color: ${theme.COLORS.Light_200};

    padding: 12px 14px;
    border-radius: 8px;

    

   
    width: 100%;

  }

  ::placeholder{
    color: ${theme.COLORS.Light_500};

  }

  .containerInput{
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.COLORS.Dark_800};
    border-radius: 8px;

    gap: 8px;
  }
`;
