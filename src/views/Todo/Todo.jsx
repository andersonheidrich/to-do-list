/* eslint-disable react/prop-types */
import * as Style from "./Todo.styles";
import { Button } from "../../components";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  return (
    <Style.TaskList
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <Style.Task>
        <div className="task-text">{todo.text}</div>
        <div>({todo.category})</div>
      </Style.Task>
      <Style.ButtonGroup>
        <Button
          className={"complete-button"}
          onClick={() => completeTodo(todo.id)}
        >
          Completar
        </Button>
        <Button className={"delete-button"} onClick={() => deleteTodo(todo.id)}>
          X
        </Button>
      </Style.ButtonGroup>
    </Style.TaskList>
  );
};

export default Todo;
