import logout from "../../assets/SignOut.png"
import { useAuth } from "../../hooks/auth"
import { Container } from "./styles"

export function ButtonLogout(){
  const {signOut} = useAuth()
 

  return(
    <Container onClick={signOut}>
      <img src={logout} alt="" />
    </Container>
  )
  
}