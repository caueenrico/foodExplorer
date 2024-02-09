import { Container } from "./styles";
import receipt from "../../assets/receipt.svg";
import { useOrder } from "../../Context/OrderContext";
import { useNavigate } from "react-router-dom";

export function ButtonOrder() {
  const { order } = useOrder()

  const navigate = useNavigate();

  function handleOrders(){
    navigate("/orderclient")
  }

  return (
    <Container onClick={handleOrders}>
      <img src={receipt} alt="receipt" />
      <span>{`Pedidos (${order.length})`}</span>
    </Container>
  );
}
