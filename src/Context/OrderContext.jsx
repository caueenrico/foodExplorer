import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext({});

function OrderProvider({ children }) {
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("@foodExplorer:userOrder");
    return storedOrder ? JSON.parse(storedOrder) : [];
  });

  function getIdDish({ id }) {
    setOrder((preventdefault) => [...preventdefault, id]);
  }

  function excluirItem({id}) {
    // Filtra os itens da order que não correspondem ao ID passado
    const newOrder = order.filter(item => item !== id);
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
