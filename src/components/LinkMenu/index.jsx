import { Link } from "react-router-dom";
import { Container } from "./styles";


export function LinkMenu({text, funcao}) {
  return(
    <Container>
      <button onClick={funcao}>
        {text}
      </button>
    </Container>
  )
}