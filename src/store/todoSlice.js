import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      if (!action.payload.text.trim()) return;
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        isCompleted: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload.id);
    },
    toggleTodoIsCompleted(state, action) {
      const findTodo = state.todos.find(item => item.id === action.payload.id);
      findTodo.isCompleted = !findTodo.isCompleted;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoIsCompleted } = todoSlice.actions;
export default todoSlice.reducer;
