import { Container } from "./styles";
import Salada from "../../assets/salada.png";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";

import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import heart from "../../assets/heart.svg"
import { useState } from "react";

export function Card() {
  const [count, setCount] = useState(1)

  function handleCountPlus() {
    const plusCount = count + 1
    setCount(plusCount)
  }

  function handleCountMinus() {
    if(count < 2) {
      return
    }
    const minusCount = count - 1
    setCount(minusCount)
  }

  return (
    <Container>
      <button className="heart"><img src={heart} alt="" /></button>
      
      <img src={Salada} alt="" />
      <Link to="/dish">
        Salada Ravanello
        <RiArrowRightSLine size={14}/>
      </Link>
      <span>R$ 49,97</span>

      <div className="Count">
        <button onClick={handleCountMinus}>
          <img src={Minus} alt="" />
        </button>
        <span> {count < 10 ? `0${count}` : count } </span>

        <button onClick={handleCountPlus}>
          <img src={Plus} alt="" />
        </button>
      </div>

      <button>incluir</button>
    </Container>
  );
}
