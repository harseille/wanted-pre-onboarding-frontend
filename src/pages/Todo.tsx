import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from 'src/components/common';
import { TodoHeader, TodoForm, TodoList } from 'src/components/todo';
import { useJWT } from 'src/hooks';
import styled from '@emotion/styled';

const Todo = () => {
  const { getJWT } = useJWT();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getJWT()) {
      navigate('/');
    }
  }, []);
  return (
    <TodoContainer>
      <TodoHeader />
      <Main>
        <TodoForm />
        <TodoList />
      </Main>
    </TodoContainer>
  );
};

export default Todo;
const TodoContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

const Main = styled(Wrapper)`
  padding-top: 5rem;
`;
