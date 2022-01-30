import { useDispatch } from 'react-redux';

import { addTodo } from './store/todoSlice';

import './App.css';
import Inputfield from './components/InputField';
import Todos from './components/Todos';

function App() {

  const dispatch = useDispatch();
  const addTask = text => dispatch(addTodo({ text }));
  
  return (
    <div className="App">
      <Inputfield {...{ addTask } } />
      <Todos />
    </div>
  );
}

export default App;
