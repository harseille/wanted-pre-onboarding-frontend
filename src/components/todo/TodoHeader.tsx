import styled from '@emotion/styled';
import { Title } from 'src/components/common';

const TodoHeader = () => (
  <Header>
    <TodoTitle>Todo List</TodoTitle>
  </Header>
);

export default TodoHeader;

const Header = styled.header`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const TodoTitle = styled(Title)`
  text-align: left;
  width: 80rem;
  margin-bottom: 0;
  padding: 0 3rem;
`;
