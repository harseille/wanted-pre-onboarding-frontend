import { useCallback, useMemo, useReducer, useRef } from 'react';
import { useHttp, useJWT } from 'src/hooks';
import { TTodo, TDefaultTodo, TTodoMode } from 'src/typing/todo';
import TodoContext from './todo-context';

type TAction = {
  type: string;
  targetTodo?: TTodo;
  fetchTodo?: TTodo[];
  id?: number;
  mode?: TTodoMode;
};

type TProvier = {
  children: JSX.Element;
};

const defaultTodoState: TDefaultTodo = {
  todoList: [],
};

const todoReducer = (state: TDefaultTodo, action: TAction): TDefaultTodo => {
  switch (action.type) {
    case 'FETCH':
      return {
        todoList: action.fetchTodo || state.todoList,
      };
    case 'ADD':
      return {
        todoList: [action.targetTodo!, ...state.todoList],
      };
    case 'UPDATE':
      return {
        todoList: state.todoList.map((todo: TTodo) => (todo.id === action.id ? action.targetTodo! : todo)),
      };
    case 'DELETE':
      return {
        todoList: state.todoList.filter((todo: TTodo) => todo.id !== action.id),
      };
    case 'CHECK':
      return {
        todoList: state.todoList.map((todo: TTodo) =>
          todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      };
    default:
      return defaultTodoState;
  }
};

const TodoProvider = ({ children }: TProvier) => {
  const [todoState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);
  const tempTodo = useRef<TTodo>();
  const tempTodoList = useRef<TTodo[]>();
  const sendRequest = useHttp();
  const { getJWT } = useJWT();
  const jwt = getJWT();

  const fetchTodoHandler = useCallback(async () => {
    await sendRequest(
      'todos',
      {
        method: 'GET',
        headers: new Headers({ Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' }),
      },
      (todolist: TTodo[]) => {
        tempTodoList.current = todolist;
      }
    );
    dispatchTodoAction({ type: 'FETCH', fetchTodo: tempTodoList.current });
  }, [sendRequest, jwt]);

  const addTodoHandler = useCallback(
    async (newTodo: string) => {
      if (newTodo.trim().length === 0) return;
      await sendRequest(
        'todos',
        {
          method: 'POST',
          headers: new Headers({ Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' }),
          body: JSON.stringify({ todo: newTodo }),
        },
        (newTodo: TTodo) => {
          tempTodo.current = newTodo;
        }
      );
      dispatchTodoAction({ type: 'ADD', targetTodo: tempTodo.current });
    },
    [sendRequest, jwt]
  );

  const updateTodoHandler = useCallback(
    async (id: number, updateTodo: string, isCompleted: boolean) => {
      if (updateTodo.trim().length === 0) return;

      await sendRequest(
        `todos/${id}`,
        {
          method: 'PUT',
          headers: new Headers({ Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' }),
          body: JSON.stringify({ todo: updateTodo, isCompleted }),
        },
        (updateTodo: TTodo) => {
          tempTodo.current = updateTodo;
        }
      );
      dispatchTodoAction({ type: 'UPDATE', id, targetTodo: tempTodo.current });
    },
    [sendRequest, jwt]
  );

  const deleteTodoHandler = useCallback(
    async (id: number) => {
      await sendRequest(
        `todos/${id}`,
        {
          method: 'DELETE',
          headers: new Headers({ Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' }),
        },
        () => {}
      );
      dispatchTodoAction({ type: 'DELETE', id });
    },
    [sendRequest, jwt]
  );

  const checkTodoHandler = useCallback((id: number) => {
    dispatchTodoAction({ type: 'CHECK', id });
  }, []);

  const todoContext = useMemo(
    () => ({
      todoList: todoState?.todoList,
      fetchTodo: fetchTodoHandler,
      addTodo: addTodoHandler,
      updateTodo: updateTodoHandler,
      deleteTodo: deleteTodoHandler,
      checkTodo: checkTodoHandler,
    }),
    [todoState?.todoList, fetchTodoHandler, addTodoHandler, updateTodoHandler, deleteTodoHandler, checkTodoHandler]
  );

  return <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
