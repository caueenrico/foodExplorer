import { useEffect, useState } from "react";
import { useOrder } from "../../Context/OrderContext";
import { Header } from "../../components/Header";
import { OrderCard } from "../../components/OrderCard";
import { Container } from "./styles";
import { api } from "../../services/api";

export function OrderClient() {
  const { order } = useOrder();
  const [menuDB, setMenuDB] = useState([]);
  const [total, setTotal] = useState(0);

   // Filtra os itens do menuDB que têm id presente na order
   const escolhidos = menuDB.filter((item) =>
   order.map((orderItem) => orderItem.id).includes(item.id)
 );

  // Função para obter a quantidade com base no ID do item na ordem
  const getQuantityById = (id) => {
    const orderItem = order.find((item) => item.id === id);
    return orderItem ? orderItem.count : 0; // Retorna a quantidade se encontrada, caso contrário, retorna 0
  };

  const calculateTotal = () => {
    let total = 0

    escolhidos.forEach(item => {
      const quantidade = getQuantityById(item.id)
      const valor = parseFloat(item.price.replace(",", "."))
      total += quantidade * valor
    });
    return total.toFixed(2)

  }

  useEffect(() => {
    async function fetchMenu() {
      const response = await api.get(
        `/menu/index?title=${""}&ingredient=${""}`
      );
      setMenuDB(response.data);
    }
    fetchMenu();
  }, []);

  useEffect(() => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [order, menuDB]);

  return (
    <>
      <Header />

      <Container>
        <h1>Meu Pedido</h1>

        {escolhidos.map((orden) => (
          <OrderCard
            key={orden.id}
            img={orden.picture}
            quantidade={getQuantityById(orden.id)}
            name={orden.title}
            preco={orden.price}
            num={orden.id}
          />
        ))}

        <p>Total: {total}</p>
      </Container>
    </>
  );
}
