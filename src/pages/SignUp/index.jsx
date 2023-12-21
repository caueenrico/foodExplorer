import { Container, Form, Headers } from "./styles";
import Polygon from "../../assets/Polygon.png";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp(){
    api.post('/user', {name, email, password}).then(() => {
      alert("Usuario cadastrado com sucesso")
      navigate('/')
      
     }).catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possivel cadastrar')
      }
     })
  }

  return (
    <Container>
      <Headers>
        <img src={Polygon} alt="" />
        <header>food explorer</header>
      </Headers>

      <Form>
        <h2>Crie sua conta</h2>
        <Input
          title={"Seu Nome"}
          placeholder={"Exemplo: Maytê Rosário"}
          type='text'
          onChange={e => setName(e.target.value)}
        />
        <Input 
          title={"Email"} 
          placeholder={"Exemplo: exemplo@exemplo.com.br"} 
          type='text'
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          title={"Senha"} 
          placeholder={"No mínimo 6 caracteres"} 
          type='password'
          onChange={e => setPassword(e.target.value)}
        />
        <Button 
          title={"Criar Conta"} 
          onClick={handleSignUp}
        />
        <Link to="/">Já tenho uma conta</Link>
      </Form>

      
    </Container>
  );
}
