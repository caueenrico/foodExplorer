import { RiArrowLeftSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Container, ContainerIngredients, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { LuUpload } from "react-icons/lu";
import { Footer } from "../../components/Footer";

import { RiArrowDownSLine } from "react-icons/ri";
import { IngredientsItens } from "../../components/IngredientsItens";
import { useState } from "react";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { IoMdAddCircle } from "react-icons/io";
import { api } from "../../services/api";

export function NewDish() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState('')

  const [category, setCategory] = useState('')

  const [ingredientes, setIngredientes] = useState([]);
  const [newIngrediente, setNewIngrediente] = useState("");

  const [nameDish, setNameDish] = useState('')

  const [price, setPrice] = useState('')

  const [descricao, setDescricao] = useState('')

  const navigate = useNavigate()

  function handleImageChosen(e){
    const file = e.target.files[0]
    setImage(file)
    setFileName(file.name)
  
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

  async function handleSendForm(){
    if (!image) {
      return alert("Selecione uma imagem.");
    }

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

    const formData = new FormData()

    formData.append("picture", image)
    formData.append("title", nameDish)
    formData.append("category", category)
    formData.append("ingredients", JSON.stringify(ingredientes))
    formData.append("price", price)
    formData.append("description", descricao)

    try{
      await api.post('/menu', formData);
      alert("prato cadastrado")
      navigate(-1)

    }catch(error){
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar o prato.");
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

        <h1>Novo Prato</h1>

        <Form>
          <div>
            <span>Imagem do prato</span>
            <label htmlFor="foodpicture">
              <LuUpload />
              {fileName || 'Selecione imagem'}
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
            placeholder="Ex.: Salada Ceasar" 
            onChange={e => setNameDish(e.target.value)}
          />

          <div>
            <span>Categoria</span>
            <label htmlFor="categoria">
              <select 
                id="categoria"
                value={category}
                onChange={e => setCategory(e.target.value)}
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
            placeholder="R$ 00,00" 
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
          
          <span>Descrição</span>
          <TextArea
            placeholder={
              "Fale brevemente sobre o prato, seus ingredientes e composição"
            }
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />

          <Button
            title={'Salvar Prato'}
            onClick={handleSendForm}
            className='botao-salvar'
          />
        </Form>
      </Container>
      <Footer />
    </>
  );
}
