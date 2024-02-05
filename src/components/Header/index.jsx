import { Container, MenuContainer, SearchContainer } from "./styles";
import hamburger from "../../assets/hamburger.svg";
import { Logo } from "../Logo";
import receipt from "../../assets/receipt.svg";
import { useState } from "react";
import { Menu } from "../Menu";
import { useAuth } from "../../hooks/auth";

import searche from "../../assets/search.svg";
import { ButtonLogout } from "../ButtonLogout";
import { Button } from "../Button";
import { ButtonOrder } from "../ButtonOrder";

export function Header({search}) {
  const { userExists } = useAuth();
  const role = userExists.role;

  const [click, setClick] = useState(false);

  function handleHamburger() {
    setClick(true);
  }

  function handleX() {
    setClick(false);
  }

  return (
    <>
      <MenuContainer data-menu-isOpen={click}>
        <Menu clickX={() => handleX()} search={search} />
      </MenuContainer>

      <Container>
        {role === "admin" ? (
          <>
            <button onClick={handleHamburger}>
              <img src={hamburger} alt="menu" />
            </button>

            <div className="logoAdmin">
              <Logo />
              <span>admin</span>
            </div>
          </>
        ) : (
          <div className="logoUser">
            <button className="hamburguer" onClick={handleHamburger}>
              <img src={hamburger} alt="menu" />
            </button>

            <Logo />

            <SearchContainer>
              <img src={searche} alt="" />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                onChange={search}
              />
            </SearchContainer>

            <div className="orderContainer">
              <div className="receipt">0</div>
              <img src={receipt} alt="receipt" />
            </div>

           
             
            <ButtonOrder />


            <ButtonLogout />
          </div>

            
        )}
      </Container>
    </>
  );
}
