import { useDispatch } from 'react-redux';

import { removeTodoOnServer, toggleTodoIsCompletedOnServer } from '../store/todoSlice';


const ItemTodo = ({ id, title, completed }) => {

  const dispatch = useDispatch();
  
  return (
    <li className="item">
      <input
        name="checkBox"
        type={"checkbox"}
        checked={completed}
        onChange={() => dispatch(toggleTodoIsCompletedOnServer(id))}
        className="checkbox"
      />
      <span className="text">{title}</span>
      <span onClick={() => dispatch(removeTodoOnServer(id))} className="remove">
        &times;
      </span>
    </li>
  );
};

export default ItemTodo;
