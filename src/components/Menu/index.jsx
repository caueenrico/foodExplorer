import { Container, Header, SearchContainer } from "./styles";
import X from "../../assets/X.svg";
import searche from "../../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import { LinkMenu } from "../LinkMenu";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Menu({ clickX, search }) {
  const { signOut, userExists } = useAuth();
  const role = userExists.role;

  const navigate = useNavigate();

  function handleNavigateEditDish() {
    navigate(`/newdish`);
  }

  function handleOut() {
    signOut()
    navigate("/")
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
          <img src={searche} alt="" />
          <input type="text" placeholder="Busque por pratos ou ingredientes" 
            onChange={search}
          />
        </SearchContainer>

        {role === "admin" ? (
          <LinkMenu text={"Novo Prato"} funcao={handleNavigateEditDish} />
        ) : (
          ""
        )}
        <LinkMenu text={"Sair"} funcao={handleOut} />
      </Container>
    </>
  );
}
