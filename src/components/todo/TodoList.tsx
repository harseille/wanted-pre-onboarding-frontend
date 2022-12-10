import { useContext, useEffect } from 'react';
import TodoContext from 'src/store/todo/todo-context';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    todoCtx.fetchTodo();
  }, []);

  return (
    <List>
      {todoCtx.todoList.map(todoInfo => (
        <TodoItem todoInfo={todoInfo} key={todoInfo.id} />
      ))}
    </List>
  );
};

export default TodoList;

const List = styled.ul`
  width: 100%;
`;
