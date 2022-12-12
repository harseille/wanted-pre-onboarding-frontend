import { useContext } from 'react';
import styled from '@emotion/styled';
import TodoContext from 'src/store/todo/todo-context';
import { TTodo } from 'src/typing/todo';
import TodoButtonGroup from './TodoButtonGroup';

type TProps = {
  todoInfo: TTodo;
  changeTodoMode: () => void;
};

const ViewModeItem = (props: TProps) => {
  const { todoInfo, changeTodoMode } = props;
  const { deleteTodo, checkTodo } = useContext(TodoContext);

  const onCheckTodoHandler = () => {
    checkTodo(todoInfo.id);
  };

  const onPositiveHandler = () => {
    changeTodoMode();
  };

  const onNegativeHandler = () => {
    deleteTodo(todoInfo.id);
  };

  return (
    <>
      <TodoCheck>
        <TodoCheckBox
          type="checkbox"
          id={todoInfo.id + ''}
          checked={todoInfo.isCompleted}
          onChange={onCheckTodoHandler}
        />
        <TodoText htmlFor={todoInfo.id + ''} isCompleted={todoInfo.isCompleted}>
          {todoInfo.todo}
        </TodoText>
      </TodoCheck>
      <TodoButtonGroup
        confirmText="수정"
        cancelText="삭제"
        onClickPositive={onPositiveHandler}
        onClickNegative={onNegativeHandler}
      />
    </>
  );
};

export default ViewModeItem;

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

const TodoText = styled.label<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.8rem;
  padding-left: 1rem;
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;
