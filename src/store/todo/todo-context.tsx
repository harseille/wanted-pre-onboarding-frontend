import { createContext } from 'react';
import { TDefaultTodo } from 'src/typing/todo';

type TActionContext = {
  fetchTodo: () => void;
  addTodo: (newTodo: string) => void;
  updateTodo: (id: number, uptateTodo: string, isCompleted: boolean) => void;
  deleteTodo: (id: number) => void;
  checkTodo: (id: number) => void;
};

const TodoContext = createContext<TDefaultTodo>({
  todoList: [],
});

const TodoActionContext = createContext<TActionContext>({
  fetchTodo: () => [],
  addTodo: (newTodo: string) => {},
  updateTodo: (id: number, uptateTodo: string, isCompleted: boolean) => {},
  deleteTodo: (id: number) => {},
  checkTodo: (id: number) => {},
});

export { TodoContext, TodoActionContext };
