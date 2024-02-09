import { createContext, useContext, useState } from "react";

const OrderContext = createContext({})

function OrderProvider({children}){
  const [order, setOrder] = useState([])

  function getIdDish({id}){
    setOrder(preventOrder => [...preventOrder, id])
    console.log(order)
  }

  return(
    <OrderContext.Provider value={{getIdDish, order}}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder(){
  const context = useContext(OrderContext)
  return context
}

export {OrderProvider, useOrder}