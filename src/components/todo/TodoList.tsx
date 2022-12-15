import { useContext, useEffect } from 'react';
import { TodoActionContext, TodoContext } from 'src/store/todo/todo-context';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  const { fetchTodo } = useContext(TodoActionContext);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return (
    <List>
      {todoList.map(todoInfo => (
        <TodoItem todoInfo={todoInfo} key={todoInfo.id} />
      ))}
    </List>
  );
};

export default TodoList;

const List = styled.ul`
  width: 100%;
`;
