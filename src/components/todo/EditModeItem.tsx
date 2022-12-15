import { useEffect, useRef, useContext } from 'react';
import { TodoActionContext } from 'src/store/todo/todo-context';
import styled from '@emotion/styled';
import { TTodo } from 'src/typing/todo';
import { Input } from '../common';
import TodoButtonGroup from './TodoButtonGroup';

type Tprop = {
  todoInfo: TTodo;
  changeTodoMode: () => void;
};

const EditModeItem = (props: Tprop) => {
  const { todoInfo, changeTodoMode } = props;
  const editInput = useRef<HTMLInputElement>(null);
  const { updateTodo } = useContext(TodoActionContext);

  useEffect(() => {
    editInput.current!.value = todoInfo.todo;
  }, []);

  const onPositiveHandler = () => {
    updateTodo(todoInfo.id, editInput.current!.value, todoInfo.isCompleted);
    changeTodoMode();
  };

  const onNegativeHandler = () => {
    changeTodoMode();
  };

  return (
    <>
      <EditInput type="text" ref={editInput} />
      <TodoButtonGroup
        confirmText="완료"
        cancelText="취소"
        onClickPositive={onPositiveHandler}
        onClickNegative={onNegativeHandler}
      />
    </>
  );
};

export default EditModeItem;

const EditInput = styled(Input)``;
