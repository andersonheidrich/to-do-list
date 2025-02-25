import { useState } from "react";
import * as Style from "./Home.styles";
import Todo from "./Todo";
import { Filter, Form, Search } from "../components";

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "1", category: "Pessoal", isCompleted: false },
    { id: 2, text: "2", category: "Trabalho", isCompleted: false },
    { id: 3, text: "3", category: "Estudo", isCompleted: false },
    { id: 4, text: "4", category: "Lazer", isCompleted: false },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 9999),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <Style.Container>
      <Style.Title>Lista de Tarefas</Style.Title>
      <Style.ContentContainer>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        <Form addTodo={addTodo} />
      </Style.ContentContainer>
    </Style.Container>
  );
};

export default Home;
