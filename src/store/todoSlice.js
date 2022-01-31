import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

    if (!res.ok) {
      throw new Error('Ошибка загрузки данных с сервера')
    }
    const data = await res.json();
    return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodoOnServer = createAsyncThunk(
  'todos/removeTodoOnServer',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });

    if (!res.ok) {
      throw new Error('Ошибка удаления данных с сервера')
    }
    dispatch(removeTodo({id}));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleTodoIsCompletedOnServer = createAsyncThunk(
  'todos/toggleTodoIsCompletedOnServer',
  async (id, { rejectWithValue, dispatch, getState }) => {
    const todo = getState().todos.todos.find(item => item.id === id);

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: !todo.completed
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    if (!res.ok) {
      throw new Error('Ошибка изменения данных на сервере')
    }
    dispatch(toggleTodoIsCompleted({id}));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodoOnServer = createAsyncThunk(
  'todos/addTodoOnServer',
  async (text, { rejectWithValue, dispatch }) => {

    if (!text.trim()) return;

    const body = {
      id: new Date().toISOString(),
      title: text,
      completed: false,
    };

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

    if (!res.ok) {
      throw new Error('Ошибка добавления данных на сервер')
    }
    dispatch(addTodo(body));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload.id);
    },
    toggleTodoIsCompleted(state, action) {
      const findTodo = state.todos.find(item => item.id === action.payload.id);
      findTodo.completed = !findTodo.completed;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [removeTodoOnServer.rejected]: setError,
    [toggleTodoIsCompletedOnServer.rejected]: setError,
    [addTodoOnServer.rejected]: setError,
  },
});

export const { addTodo, removeTodo, toggleTodoIsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
