import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

//isso aqui eu vou mandar para o main.js
function AuthProvider({ children }) {
  const [data, setData] = useState({});

  

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { userExists, token } = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(userExists));
      localStorage.setItem("@foodExplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //IMPORTANTE //para que coloque o token do usuario no headers das demais requisições

      //preciso guardar as informações em um estado
      setData({ userExists, token });

      console.log(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possivel entrar");
      }
    }
  }

  async function signOut() {
    //removendo os dados do localstorage
    localStorage.removeItem("@foodExplorer:user");
    localStorage.removeItem("@foodExplorer:token");
   

    setData({}); //setei o data como vazio
  }

  function likeMenu() {}

  //ele vai cair aqui no useEffect se ja foi logado pelo menos 1 vez na maquina que esta usando
  useEffect(() => {
    const token = localStorage.getItem("@foodExplorer:token");
    const userExists = localStorage.getItem("@foodExplorer:user");

    if (token && userExists) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //IMPORTANTE //para que coloque o token do usuario no headers das demais requisições
      //preciso guardar as informações em um estado
      setData({
        userExists: JSON.parse(userExists),
        token,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, userExists: data.userExists, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
