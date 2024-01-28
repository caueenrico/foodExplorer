import { Container, MenuContainer } from "./styles";
import hamburger from "../../assets/hamburger.svg";
import { Logo } from "../Logo";
import receipt from "../../assets/receipt.svg";
import { useState } from "react";
import { Menu } from "../Menu";
import { useAuth } from "../../hooks/auth";

export function Header() {
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
      {click ? (
        <MenuContainer>
          <Menu clickX={() => handleX()} />
        </MenuContainer>
      ) : (
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
              <button onClick={handleHamburger}>
                <img src={hamburger} alt="menu" />
              </button>

              <Logo />
              <div className="orderContainer">
                <div className="receipt">0</div>
                <img src={receipt} alt="receipt" />
              </div>
            </div>
          )}
        </Container>
      )}
    </>
  );
}
