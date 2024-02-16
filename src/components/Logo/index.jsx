import { useNavigate } from "react-router-dom"
import Polygon from "../../assets/Polygon.png"
import { Container } from "./styles"

export function Logo(){

  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }

  return(
    <Container>
      <button onClick={handleNavigate}>
      <img src={Polygon} alt="" />
      <h1>food explorer</h1> 
      </button>
    </Container>
  )
}