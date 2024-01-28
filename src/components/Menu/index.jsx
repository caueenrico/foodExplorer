import { Container, Header, SearchContainer } from "./styles";
import X from "../../assets/X.svg";
import search from "../../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { LinkMenu } from "../LinkMenu";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Menu({clickX}) {
  const {signOut, userExists} = useAuth()
  const role = userExists.role

  const navigate = useNavigate()
  function handleNavigateEditDish() {
    navigate(`/newdish`)
  }
  
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
          <img src={search} alt=""/>
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </SearchContainer>

        {role === "admin" ? <LinkMenu text={"Novo Prato"} funcao={handleNavigateEditDish}/> : ""}
        <LinkMenu text={"Sair"} funcao={signOut}/>
        

      </Container> 
    </>
  );
}
