import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

export function Routes (){
  const {userExists} = useAuth()

  console.log(userExists)
   return (
    <BrowserRouter>
      {userExists ? <AppRoutes /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}