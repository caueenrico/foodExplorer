import { OrderContainer } from "./styles";
import { api } from "../../services/api";
import { useOrder } from "../../Context/OrderContext";

export function OrderCard({img, quantidade, name, preco, num }) {
  const { excluirItem } = useOrder();

  // Define uma função de callback para o onClick que chama excluirItem com o num
  const handleExcluirItem = () => {
    excluirItem({ id: num }); // Estou assumindo que num é o ID do item a ser excluído
  };

  return (
    <OrderContainer>
      <img src={`${api.defaults.baseURL}/files/${img}`} alt="" />
      <div className="information">
        <p>
          {quantidade} x {name} <span>R$ {preco}</span>
        </p>
        <button onClick={handleExcluirItem}>Excluir</button>
      </div>
    </OrderContainer>
  );
}
