// store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // action.payload should be an object: { text, priority }
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false, // false means active by default
        priority: action.payload.priority || 'Medium',
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        if (text) todo.text = text;
        if (priority) todo.priority = priority;
      }
    },
    setTodoStatus: (state, action) => {
      const { id, completed } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = completed;
      }
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo, setTodoStatus, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
