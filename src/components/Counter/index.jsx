import { Container } from "./styles"
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import { useState } from "react";

export function Counter(){
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

  return(
    <Container>
        <button onClick={handleCountMinus}>
          <img src={Minus} alt="" />
        </button>
        <span> {count < 10 ? `0${count}` : count } </span>

        <button onClick={handleCountPlus}>
          <img src={Plus} alt="" />
        </button>
      </Container>
  )
}