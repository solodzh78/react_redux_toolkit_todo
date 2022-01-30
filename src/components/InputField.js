import { useState } from "react";

const Inputfield = ({ addTask }) => {
  const [text, setText] = useState('');
  const onAddTodo = e => {
    e.preventDefault();
    addTask(text);
    setText('');
  };
  return (
    <div>
      <form onSubmit={onAddTodo}>
        <input
          type={"text"}
          placeholder="Введите текст"
          value={text}
          onChange={(e) => setText(e.target.value.toString())}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default Inputfield;
