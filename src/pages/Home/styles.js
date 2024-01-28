import styled from "styled-components";
import theme from "../../styles/theme";
import {devicesBreakPoints} from "../../styles/devicesBreakPoints"

export const Container = styled.div``;

export const BannerPrincipal = styled.div`
  margin-inline: 1.2rem 1.6rem;
  margin-bottom: 62px;
  height: 120px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 44px;

  position: relative;

  h2 {
    font-family: Poppins;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-bottom: 0.3rem;
    color: ${theme.COLORS.Light_300};
  }

  p {
    font-family: Poppins;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .textBanner {
    width: 20.2rem;
    position: absolute;
    top: 3.6rem;
    right: 2.1rem;
  }

  img {
    width: 19.1rem;

    position: absolute;
    left: -3rem;
    bottom: 0;
  }

  @media (min-width: ${devicesBreakPoints.NOTEBOOK}){
    
  }

`;

export const ContainerCategory = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;

  margin-bottom: 24px;

  h2 {
    font-family: Poppins;
    font-size: 18px;
    color: ${theme.COLORS.Light_300}
  }

  swiper-container {
    height: 29.2rem;
  }

  swiper-slide {
    max-width: 21rem;
    display: flex;
  }

`;
