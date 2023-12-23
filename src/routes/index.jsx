import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";

export function Routes (){
  const {userExists} = useAuth()

 
   return (
    <BrowserRouter>
     {userExists ? <AppRoutes /> : <AuthRoutes /> }

  
    </BrowserRouter>
  )
}