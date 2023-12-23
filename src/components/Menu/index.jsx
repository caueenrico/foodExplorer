import { Container, Header, SearchContainer } from "./styles";
import X from "../../assets/X.svg";
import search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { LinkMenu } from "../LinkMenu";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Menu({clickX}) {
  
  const {signOut} = useAuth()
  
  return (
    <>
      <Header>
        <button onClick={clickX}>
          <img src={X} alt="botão para fechar" />
        </button>
        <h1>Menu</h1>
      </Header>

      <Container>
        <SearchContainer>
          <img src={search} alt="" />
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </SearchContainer>

        <LinkMenu funcao={signOut}/>

      </Container>
    </>
  );
}
