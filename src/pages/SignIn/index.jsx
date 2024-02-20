import { Container, Form, Headers } from "./styles";
import Polygon from "../../assets/Polygon.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSignIn() {
    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false); // Define o estado de carregamento de volta para falso apenas se a chamada signIn for bem-sucedida
    }
  }

  return (
    <Container>
      <Headers>
        <img src={Polygon} alt="" />
        <header>food explorer</header>
      </Headers>

      <Form>
        <h2>Faça login</h2>
        <Input
          title={"Email"}
          type="text"
          placeholder={"Exemplo: exemplo@exemplo.com.br"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title={"Senha"}
          type="password"
          placeholder={"No mínimo 6 caracteres"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          title={loading ? "Carregando..." : "Entrar"}
          onClick={handleSignIn}
          disabled={loading}
        />
        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
