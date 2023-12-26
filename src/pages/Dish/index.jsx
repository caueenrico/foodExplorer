import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Counter } from "../../components/Counter";
import { RiArrowLeftSLine } from "react-icons/ri";
import { PiReceiptLight } from "react-icons/pi";

import { ButtonArea, Container } from "./styles";

import Salad from "../../assets/salad.png";
import { Ingredients } from "../../components/ingredients";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Dish() {
  const [menuDetails, setMenuDetails] = useState([]);
  const [ingredients, setIngredients] = useState([])

  const params = useParams();

  useEffect(() => {
    async function fetchMenuDetails() {
      const response = await api.get(`/menu/${params.id}`);
      setMenuDetails(response.data);
      setIngredients(response.data.ingredients)
    }

    fetchMenuDetails();
  }, []);

  console.log(ingredients);
  return (
    <>
      <Header />

      <Container>
        <Link to="/">
          <RiArrowLeftSLine size={32} />
          voltar
        </Link>

        <img
          src={`${api.defaults.baseURL}/files/${menuDetails.picture}`}
          alt=""
        />

        <h1>{menuDetails.title}</h1>
        <p>{menuDetails.description}</p>

        <div className="Ingredients">
          {ingredients.map((itens) => (
            <Ingredients key={itens.id} name={itens.name}/>
          ))}
        </div>
      </Container>

      <ButtonArea>
        <Counter />

        <Button icon={PiReceiptLight} title={`pedir ∙ R$ ${menuDetails.price}`} />
      </ButtonArea>

      <Footer />
    </>
  );
}
