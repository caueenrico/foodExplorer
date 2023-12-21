import { Container } from "./styles";
import icon from "../../assets/losan.svg";

export function Footer() {
  return (
    <Container>
      <span className="logo">
        <img src={icon} alt="" />
        food explorer
      </span>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
