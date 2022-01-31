import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoOnServer, fetchTodos } from './store/todoSlice';

import './App.css';
import Inputfield from './components/InputField';
import Todos from './components/Todos';

function App() {

  const dispatch = useDispatch();
  const addTask = text => dispatch(addTodoOnServer(text));
  const { status, error} = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Inputfield {...{ addTask } } />
      {status === 'loading' && <h2>{'Loading...'}</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <Todos />
    </div>
  );
}

export default App;
