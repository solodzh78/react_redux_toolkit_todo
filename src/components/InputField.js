import { useState } from "react";

const Inputfield = ({ addTask }) => {
  const [text, setText] = useState('');
  const onAddTodo = () => {
    addTask(text);
    setText('');
  };
  return (
    <div>
      <div>
        <input
          type={"text"}
          placeholder="Введите текст"
          value={text}
          onChange={(e) => setText(e.target.value.toString())}
        />
        <button onClick={onAddTodo}>Добавить</button>
      </div>
    </div>
  );
};

export default Inputfield;
