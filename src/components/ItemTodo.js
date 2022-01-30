import { useDispatch } from 'react-redux';

import { removeTodo, toggleTodoIsCompleted } from '../store/todoSlice';


const ItemTodo = ({ id, text, isCompleted }) => {

  const dispatch = useDispatch();
  return (
    <li className="item">
      <input
        name="checkBox"
        type={"checkbox"}
        checked={isCompleted}
        onChange={() => dispatch(toggleTodoIsCompleted({id}))}
        className="checkbox"
      />
      <span className="text">{text}</span>
      <span onClick={() => dispatch(removeTodo({id}))} className="remove">
        &times;
      </span>
    </li>
  );
};

export default ItemTodo;
