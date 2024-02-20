import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext({});

function OrderProvider({ children }) {
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("@foodExplorer:userOrder");
    return storedOrder ? JSON.parse(storedOrder) : [];
  });

  function getIdDish({ id, count }) {
    const existingItem = order.find(item => item.id === id);

    if (existingItem) {
      // Se o item já existe no pedido, atualiza apenas a quantidade
      const updatedOrder = order.map(item => {
        if (item.id === id) {
          return { ...item, count: item.count + count };
        }
        return item;
      });
      setOrder(updatedOrder);
    } else {
      // Caso contrário, adiciona o novo item ao pedido
      setOrder(prevOrder => [...prevOrder, { id, count }]);
    }
  }

  function excluirItem({ id }) {
    // Filtra os itens da order que não correspondem ao ID passado
    const newOrder = order.filter(item => item.id !== id);
    // Atualiza o estado 'order' com o novo array resultante
    setOrder(newOrder);
  }

  useEffect(() => {
    localStorage.setItem("@foodExplorer:userOrder", JSON.stringify(order));
  }, [order]);

  return (
    <OrderContext.Provider value={{ getIdDish, order, excluirItem }}>
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);
  return context;
}

export { OrderProvider, useOrder };