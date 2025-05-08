/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Style from "./Form.styles";
import Button from "../Button";

const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <Style.Container>
      <h4>Nova tarefa:</h4>
      <form onSubmit={handleSubmit}>
        <Style.InputsContainer>
          <input
            type="text"
            placeholder="Nome da tarefa"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
          </select>
          <Button type="submit" className={"create-button"}>
            Adicionar
          </Button>
        </Style.InputsContainer>
      </form>
    </Style.Container>
  );
};

export default Form;
