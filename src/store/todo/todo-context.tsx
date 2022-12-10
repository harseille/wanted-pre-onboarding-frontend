import React from 'react';
import { TTodo } from 'src/typing/todo';

type TContext = {
  todoList: TTodo[] | [];
  fetchTodo: () => void;
  addTodo: (newTodo: string) => void;
  updateTodo: (id: number, uptateTodo: string, isCompleted: boolean) => void;
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
};

const TodoContext = React.createContext<TContext>({
  todoList: [],
  fetchTodo: () => [],
  addTodo: (newTodo: string) => {},
  updateTodo: (id: number, uptateTodo: string, isCompleted: boolean) => {},
  deleteTodo: (id: number) => {},
  checkTodo: (id: number) => {},
});

export default TodoContext;
