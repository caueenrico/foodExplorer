import { Link } from "react-router-dom";
import { Container } from "./styles";


export function LinkMenu({funcao}) {
  return(
    <Container>
      <button onClick={funcao}>
        Sair
      </button>
    </Container>
  )
}