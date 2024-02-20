import { Header } from "../../components/Header";
import { BannerPrincipal, Container, ContainerCategory } from "./styles";
import bannerImg from "../../assets/pngegg2.png";
import Maskgroup from "../../assets/Maskgroup.png"
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";

import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { register } from "swiper/element/bundle";
import "swiper/css"; // Importe os estilos do Swiper


register();//para que o swiper funcione

export function Home() {
   const [menuDB, setMenuDB] = useState([]);
  const [search, setSearch] = useState('')


  const refeicao = menuDB.filter(item => item.category === "refeicao" ||item.category === "salada" )
  const bebida = menuDB.filter(item => item.category === "suco")
  const sobremesa = menuDB.filter(item => item.category === "sobremesa")


  useEffect(() => {
    async function fetchMenu() {
      const response = await api.get(
        `/menu/index?title=${""}&ingredient=${""}`
      );
      setMenuDB(response.data);
    }
    fetchMenu();
   
   
  }, []);

  useEffect(() => {
    async function searchMenu(){
      const response = await api.get(
        `/menu/index?title=${search}&ingredient=${""}`
      );
      setMenuDB(response.data)
    }
    searchMenu()
  },[search])

  console.log()
  return (
    <>
      <Header clickHamburger={() => handleClickMenu(false)} search={(e) => setSearch(e.target.value)}/>
      <Container>
        <BannerPrincipal>
          <img src={bannerImg} alt="" className="imgMobile" />
          <img src={Maskgroup} alt="" className="imgDesktop" />

          <div className="textBanner">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </BannerPrincipal>

        <ContainerCategory>
          <h2>Refeições</h2>

          <swiper-container
            space-between={"27"}
            slides-per-view="auto"
            loop="false"
          >
            {menuDB.length == 0 ? (
              <span>carregando...</span>
            ) : (
              refeicao.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    id={dish.id}
                    picture={dish.picture}
                    title={dish.title}
                    price={dish.price}
                   
                  />
                </swiper-slide>
              ))
            )}
          </swiper-container>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Sobremesas</h2>

          <swiper-container
            space-between={"27"}
            slides-per-view="auto"
            loop="true"
          >
            {menuDB.length == 0 ? (
              <span>carregando...</span>
            ) : (
              sobremesa.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    id={dish.id}
                    picture={dish.picture}
                    title={dish.title}
                    price={dish.price}
                   
                  />
                </swiper-slide>
              ))
            )}
          </swiper-container>
        </ContainerCategory>

        <ContainerCategory>
          <h2>Bebidas</h2>

          <swiper-container
            space-between={"27"}
            slides-per-view="auto"
            loop="true"
          >
            {menuDB.length == 0 ? (
              <span>carregando...</span>
            ) : (
              bebida.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    id={dish.id}
                    picture={dish.picture}
                    title={dish.title}
                    price={dish.price}
                  
                  />
                </swiper-slide>
              ))
            )}
          </swiper-container>
        </ContainerCategory>
      </Container>
      <Footer />
    </>
  );
}
