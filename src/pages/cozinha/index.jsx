import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
`;

const OrderItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`;

const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Aqui você faria a lógica para conectar ao seu backend e obter os pedidos em tempo real
    // Por enquanto, vamos apenas simular alguns pedidos
    const simulatedOrders = [
      { id: 1, customer: "Cliente 1", item: "Pizza", status: "Pendente" },
      { id: 2, customer: "Cliente 2", item: "Hambúrguer", status: "Preparando" },
      { id: 3, customer: "Cliente 3", item: "Salada", status: "Concluído" },
    ];
    setOrders(simulatedOrders);

    // Aqui você configuraria a lógica para escutar por atualizações do banco de dados em tempo real
    // Por exemplo, usando WebSockets ou um serviço de atualização em tempo real
  }, []); // Esta função será executada apenas uma vez quando o componente for montado

  return (
    <DashboardContainer>
      <h1>Pedidos</h1>
      <OrderList>
        {orders.map((order) => (
          <OrderItem key={order.id}>
            <strong>Cliente:</strong> {order.customer} <br />
            <strong>Item:</strong> {order.item} <br />
            <strong>Status:</strong> {order.status}
          </OrderItem>
        ))}
      </OrderList>
    </DashboardContainer>
  );
};

export default Dashboard;