import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, ContainerIngredients, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LuUpload } from "react-icons/lu";
import { Footer } from "../../components/Footer";

import { RiArrowDownSLine } from "react-icons/ri";
import { IngredientsItens } from "../../components/IngredientsItens";
import { useEffect, useState } from "react";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { IoMdAddCircle } from "react-icons/io";
import { api } from "../../services/api";

export function UpdateDish() {
  const [dishData, setDishData] = useState(null);

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const [category, setCategory] = useState("");

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState("");

  const [nameDish, setNameDish] = useState("");

  const [price, setPrice] = useState("");

  const [descricao, setDescricao] = useState("");

  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchMenuDetails() {
      try {
        const response = await api.get(`/menu/${params.id}`);

        setDishData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMenuDetails();
  }, [params.id]);

  useEffect(() => {
    if (dishData) {
      setNameDish(dishData.title);
      setCategory(dishData.category);
      setPrice(dishData.price);
      setDescricao(dishData.description);
      console.log(dishData.ingredients);

      const allingredientes = dishData.ingredients.map(
        (ingredient) => ingredient.name
      );

      setIngredientes(allingredientes);
    }
  }, [dishData]);

  function handleImageChosen(e) {
    const file = e.target.files[0];
    setImage(file);
    setFileName(file.name);
    console.log(file);
  }

  function handleAddNewIngrediente() {
    if (!newIngrediente || newIngrediente === " ") {
      return;
    }

    setIngredientes((prevsate) => [...prevsate, newIngrediente]);
    setNewIngrediente("");
  }

  function handleRemoveIngredientes(ingredienteDeletado) {
    setIngredientes((prevstate) =>
      prevstate.filter((ingredientes) => ingredientes !== ingredienteDeletado)
    );
  }

  async function handleSendForm() {
    // if (!image) {
    //   return alert("Selecione uma imagem.");
    // }

    if (!nameDish) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione a categoria.");
    }

    if (ingredientes.length === 0) {
      return alert("Informe pelo menos um ingrediente.");
    }

    // if (newIngrediente) {
    //   return alert(
    //     "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
    //   );
    // }

    if (!price) {
      return alert("Não esqueça de adinonar o preço");
    }

    if (!descricao) {
      return alert("Digite alguma descrição");
    }

    try {
      const updatedDish = {
        title: nameDish,
        category: category,
        description: descricao,
        ingredients: ingredientes,
      };

      if (image) {
        const formData = new FormData();
        formData.append("picture", image);

        await api.patch(`menu/picture/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await api.patch(`menu/${params.id}`, updatedDish);
      alert("Prato atualizado com sucesso!");
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato.");
      }
    }
  }

  async function handleDeleteMenu(){
    const confirmed = confirm('tem certeza que deseja deletar esse prato ?')

    if(confirmed){
      try{
      
        await api.delete(`menu/${params.id}`)
        alert("Prato deletado com sucesso!");
        navigate(-1)
  
      } catch (e) {
  
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível Deletar o Prato.");
        }
  
      }
    }
    
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <RiArrowLeftSLine size={22} />
          voltar
        </Link>

        <h1>Editar Prato</h1>

        <Form>
          <div>
            <span>Imagem do prato</span>
            <label htmlFor="foodpicture">
              <LuUpload />
              {fileName || "Selecione imagem para alterá-la"}
              <input
                id="foodpicture"
                type="file"
                onChange={handleImageChosen}
              />
            </label>
          </div>

          <Input
            type="text"
            title={"Nome"}
            placeholder={nameDish}
            onChange={(e) => setNameDish(e.target.value)}
          />

          <div>
            <span>Categoria</span>
            <label htmlFor="categoria">
              <select
                id="categoria"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecionar</option>
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="suco">Bebida</option>
              </select>
              <RiArrowDownSLine size={24} />
            </label>
          </div>

          <span>Ingredients</span>
          <ContainerIngredients>
            {ingredientes.map((ingrediente, index) => (
              <IngredientsItens
                key={String(index)}
                value={ingrediente}
                onClick={() => handleRemoveIngredientes(ingrediente)}
              />
            ))}

            <IngredientsItens
              isNew
              value={newIngrediente}
              onChange={(e) => setNewIngrediente(e.target.value)}
              onClick={handleAddNewIngrediente}
            />
          </ContainerIngredients>

          <Input
            type="text"
            title={"Preço"}
            placeholder={`R$ ${price}`}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <span>Descrição</span>
          <TextArea
            defaultValue={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <div class="containerButton">
            <Button
              title={"Excluir prato"}
              onClick={handleDeleteMenu}
              className="botao-excluir"
            />

            <Button
              title={"Salvar Prato"}
              onClick={handleSendForm}
              className="botao-salvar"
            />
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
