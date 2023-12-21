import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import {Button} from "../../components/Button";
import {Footer} from "../../components/Footer"

import { Counter } from "../../components/Counter";
import { RiArrowLeftSLine } from "react-icons/ri";
import { PiReceiptLight } from "react-icons/pi";

import { ButtonArea, Container } from "./styles";

import Salad from "../../assets/salad.png"
import { Ingredients } from "../../components/ingredients";


export function Dish() {
  return(
    <>
    <Header />
    
    <Container>
      <Link to='/'>
        <RiArrowLeftSLine size={32}/>
        voltar
      </Link>

      <img src={Salad} alt="" />
      
      <h1>Salada Ravanello</h1>
      <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

      <div className="Ingredients">
        <Ingredients />
        <Ingredients />
        <Ingredients />

        <Ingredients />
        <Ingredients />
        <Ingredients />
      </div>

    </Container>

      <ButtonArea>
        <Counter />
        
        <Button 
          icon={PiReceiptLight}
          title={`pedir ∙ R$ 25,00`}
        />

      </ButtonArea>

      <Footer />
    </>
  )
}