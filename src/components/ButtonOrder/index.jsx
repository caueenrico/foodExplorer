import { Container } from "./styles";
import receipt from "../../assets/receipt.svg";

export function ButtonOrder() {
  return (
    <Container>
      <img src={receipt} alt="receipt" />
      <span>Pedidos (0)</span>
    </Container>
  );
}
