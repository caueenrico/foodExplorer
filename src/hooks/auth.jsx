import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

//isso aqui eu vou mandar para o main.js
function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { userExists , token } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(userExists));
      localStorage.setItem("@foodExplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //IMPORTANTE //para que coloque o token do usuario no headers das demais requisições
      
      //preciso guardar as informações em um estado
      setData({ userExists, token })
      
      console.log(response.data)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possivel entrar");
      }
    }
  }
  
  //ele vai cair aqui no useEffect se ja foi logado pelo menos 1 vez na maquina que esta usando
    useEffect(() => {
      const token = localStorage.getItem("@foodExplorer:token");
      const user = localStorage.getItem("@foodExplorer:user");
  
      if (token && user) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //IMPORTANTE //para que coloque o token do usuario no headers das demais requisições
        //preciso guardar as informações em um estado
        setData({
          user: JSON.parse(user),
          token,
        });
      }
    }, []);

  return (
    <AuthContext.Provider value={{signIn, userExists: data.userExists}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};
