// TODO: todoSlice 를 작성하세요.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: Date.now(),
      title: "테스트 제목",
      body: "테스트 내용",
      isDone: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, isDone: !action.payload.isDone }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
