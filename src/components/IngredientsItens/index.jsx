import { useState } from "react";
import { Container } from "./styles";
import { Input } from "../Input";
import { LuPlus } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";

export function IngredientsItens({isNew, value, onClick, ...rest}) {
    
  return (
    <Container isNew={isNew}>
      <input 
        {...rest}
        type="text" 
        value={value} 
        placeholder="adicionar"
        readOnly={!isNew} 
      />
      <button onClick={onClick} type="button"> {isNew ? <LuPlus size={18}/> : <IoIosClose size={23}/>} </button>
    </Container>
  );
}
