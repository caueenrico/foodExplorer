import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { BannerPrincipal, Container, ContainerCategory } from "./styles";
import bannerImg from "../../assets/pngegg2.png";
import { Menu } from "../../components/Menu";
import { useState } from "react";
import { Card } from "../../components/Card";
import { useKeenSlider } from "keen-slider/react";
import { Footer } from "../../components/Footer";

export function Home() {
  const [click, useClick] = useState(true);

  function handleClickMenu(state) {
    useClick(state);
  }

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 2,
      spacing: 100,
    },
  });

  return (
    <>
      <Header clickHamburger={() => handleClickMenu(false)} />
      <Container>
        <BannerPrincipal>
          <img src={bannerImg} alt="" />

          <div className="textBanner">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </BannerPrincipal>

        <ContainerCategory>
          <h2>Refeições</h2>

          <div ref={sliderRef} className="CardContainer keen-slider">
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>

            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
          </div>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Pratos principais</h2>

          <div ref={sliderRef} className="CardContainer keen-slider">
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>

            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
          </div>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Pratos principais</h2>

          <div ref={sliderRef} className="CardContainer keen-slider">
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>

            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
            <div className="keen-slider__slide">
              <Card />
            </div>
          </div>
        </ContainerCategory>
      </Container>
      <Footer />
    </>
  );
}
