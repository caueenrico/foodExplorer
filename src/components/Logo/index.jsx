import Polygon from "../../assets/Polygon.png"
import { Container } from "./styles"

export function Logo(){
  return(
    <Container>
      <img src={Polygon} alt="" />
      <h1>food explorer</h1> 
    </Container>
  )
}