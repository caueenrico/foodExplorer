import { useNavigate } from "react-router-dom"
import logout from "../../assets/SignOut.png"
import { useAuth } from "../../hooks/auth"
import { Container } from "./styles"

export function ButtonLogout(){
  const {signOut} = useAuth()

  const navigate = useNavigate()

  function handleOUt() {
    signOut()
    navigate('/')
  }
 

  return(
    <Container onClick={handleOUt}>
      <img src={logout} alt="" />
    </Container>
  )
  
}