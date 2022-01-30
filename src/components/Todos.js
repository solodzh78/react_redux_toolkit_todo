import { useSelector } from "react-redux";
import ItemTodo from "./ItemTodo";

const Todos = () => {

  const todos = [...useSelector(state => state.todos.todos)].reverse();
  return (
    <ul className="items">
      {todos.length > 0 &&
        todos.map((item) => (
          <ItemTodo key={item.id} {...item} />
        ))}
    </ul>
  );
};

export default Todos;
