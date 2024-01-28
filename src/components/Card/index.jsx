import { Container } from "./styles";
import Salada from "../../assets/salada.png";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import { GoPencil } from "react-icons/go";

import { RiArrowRightSLine } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import heart from "../../assets/heart.svg";
import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../ButtonText";
import { Button } from "../Button";
import { useAuth } from "../../hooks/auth";

export function Card({ title, price, picture, id }) {
  const { userExists } = useAuth();
  const role = userExists.role;
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  function handletoMenuDetails(id) {
    navigate(`/dish/${id}`);
  }

  function handleUpdateDish(id) {
    navigate(`/updatedish/${id}`);
  }

  function handleCountPlus() {
    const plusCount = count + 1;
    setCount(plusCount);
  }

  function handleCountMinus() {
    if (count < 2) {
      return;
    }
    const minusCount = count - 1;
    setCount(minusCount);
  }

  return (
    <Container>
      
      <button className="heart" onClick={() => handleUpdateDish(id)}>
        {role === "admin" ? <GoPencil size={23} /> : <img src={heart} alt="" />}
      </button>
      <img src={`${api.defaults.baseURL}/files/${picture}`} alt="" />
      <ButtonText
        title={title}
        icon={RiArrowRightSLine}
        onClick={() => handletoMenuDetails(id)}
      />

      <span>R$ {price}</span>
      {role === "admin" ? (
        ""
      ) : (
        <>
          <div className="Count">
            <button onClick={handleCountMinus}>
              <img src={Minus} alt="" />
            </button>
            <span> {count < 10 ? `0${count}` : count} </span>

            <button onClick={handleCountPlus}>
              <img src={Plus} alt="" />
            </button>
          </div>
          <Button title={"incluir"} className="incluir" />{" "}
        </>
      )}
    </Container>
  );
}
