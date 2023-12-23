import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { BannerPrincipal, Container, ContainerCategory } from "./styles";
import bannerImg from "../../assets/pngegg2.png";
import { Menu } from "../../components/Menu";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { useKeenSlider } from "keen-slider/react";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";

export function Home() {
  const [menuDB, setMenuDB] = useState([])
  
  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: {
      perView: 2,
      spacing: 100,
    },
  }); 

  useEffect(() => {
    async function fetchMenu() {
      const response = await api.get(`/menu/index?title=${''}&ingredient=${''}`);
      setMenuDB(response.data)
    }
    fetchMenu()
    console.log(menuDB)
  },[])

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

          <div ref={sliderRef} className="keen-slider CardContainer"> 

           {menuDB && menuDB.map(dish => (
              <div className="keen-slider__slide" key={dish.id}>
                <Card />
              </div>
            ))}
             
          </div>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Pratos principais</h2>

          <div ref={sliderRef} className="CardContainer keen-slider">
          {menuDB.map(dish => (
              <div className="keen-slider__slide" key={String(dish.id)}>
                <Card />
              </div>
            ))}
          </div>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Pratos principais</h2>

          <div ref={sliderRef} className="CardContainer keen-slider">
          {menuDB.map(dish => (
              <div className="keen-slider__slide" key={String(dish.id)}>
                <Card />
              </div>
            ))}
          </div>
        </ContainerCategory>
      </Container>
      <Footer />
    </>
  );
}
