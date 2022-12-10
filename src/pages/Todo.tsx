import styled from '@emotion/styled';
import { Wrapper, Title, Input, Button } from 'src/components/common';

const Todo = () => (
  <TodoContainer>
    <Header>
      <TodoTitle>Todo List</TodoTitle>
    </Header>
    <Main>
      <TodoInputForm>
        <TodoInput type="text" placeholder="할 일을 입력해주세요" />
        <SubmitButton>추가</SubmitButton>
      </TodoInputForm>
      <TodoList>
        <TodoItem>
          <EditInput type="text" value="todo test" />
          <ButtonGroup>
            <SubmitButton>제출</SubmitButton>
            <CancelButton>취소</CancelButton>
          </ButtonGroup>
        </TodoItem>
        <TodoItem>
          <TodoCheck>
            <TodoCheckBox type="checkbox" id="todo" />
            <TodoText htmlFor="todo">오늘 할 일</TodoText>
          </TodoCheck>
          <ButtonGroup>
            <ConfirmButton>수정</ConfirmButton>
            <CancelButton>삭제</CancelButton>
          </ButtonGroup>
        </TodoItem>
      </TodoList>
    </Main>
  </TodoContainer>
);

export default Todo;
const TodoContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

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

const Main = styled(Wrapper)`
  padding-top: 5rem;
`;

const TodoInputForm = styled.section`
  margin: 5rem 0;
  display: flex;
`;

const TodoInput = styled(Input)`
  height: 4rem;
  margin-right: 2rem;
`;

const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.wantedMain};
  border: 1px solid ${({ theme }) => theme.colors.wantedMain};
  &:hover,
  &:active {
    color: white;
    border: 0px;
    background: ${({ theme }) => theme.colors.wantedMain};
  }
`;

const TodoList = styled.ul`
  width: 100%;
`;
const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 2.5rem;
`;

const EditInput = styled(Input)``;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 1rem;
  width: 24rem;
  height: 4rem;
`;

const ConfirmButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.wantedGreen};
  border: 1px solid ${({ theme }) => theme.colors.wantedGreen};
  height: 100%;
  &:hover,
  &:active {
    color: white;
    border: 0px;
    background: ${({ theme }) => theme.colors.wantedGreen};
  }
`;
const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.wantedRed};
  border: 1px solid ${({ theme }) => theme.colors.wantedRed};
  height: 100%;
  &:hover,
  &:active {
    color: white;
    border: 0px;
    background: ${({ theme }) => theme.colors.wantedRed};
  }
`;

const TodoCheck = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.6rem;
`;

const TodoCheckBox = styled.input`
  width: 2.4rem;
  height: 2.4rem;
`;

const TodoText = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  padding-left: 1rem;
`;
