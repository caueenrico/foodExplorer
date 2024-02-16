import { useEffect, useState } from "react";
import { useOrder } from "../../Context/OrderContext";
import { Header } from "../../components/Header";
import { OrderCard } from "../../components/OrderCard";
import { Container } from "./styles";
import { api } from "../../services/api";

export function OrderClient() {
  const { order } = useOrder();
  const [menuDB, setMenuDB] = useState([])

  // Filtra os itens do menuDB que têm id presente na order
  const escolhidos = menuDB.filter(item => order.includes(item.id));

  // Objeto para contar a quantidade de ocorrências de cada número na order
   const quantidadePorNumero = order.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

   console.log(quantidadePorNumero)
  
  useEffect(() => {
    async function fetchMenu() {
      const response = await api.get(
        `/menu/index?title=${""}&ingredient=${""}`
      );
      setMenuDB(response.data);
    }
    fetchMenu();
  }, []);

  
  return (
    <>
      <Header />

      <Container>
        <h1>Meu Pedido</h1>

        {escolhidos.map((orden) => (
          <OrderCard 
            img={orden.picture}
            quantidade={quantidadePorNumero[orden.id]}
            name={orden.title}
            preco={orden.price}
            num={orden.id}
          />
        ))}


      </Container>
    </>
  );
}
