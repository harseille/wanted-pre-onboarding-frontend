import { useEffect, useRef, useContext } from 'react';
import TodoContext from 'src/store/todo/todo-context';
import styled from '@emotion/styled';
import { TTodo } from 'src/typing/todo';
import { Input } from '../common';
import TodoButtonGroup from './TodoButtonGroup';

type Tprop = {
  todoInfo: TTodo;
  isEditMode: boolean;
  cancelEditMode: any;
};

const EditModeItem = (props: Tprop) => {
  const { todoInfo, isEditMode, cancelEditMode } = props;
  const editInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    editInput.current!.value = todoInfo.todo;
  }, []);

  const updateTodo = () => {
    todoCtx.updateTodo(todoInfo.id, editInput.current!.value, todoInfo.isCompleted);
    cancelEditMode();
  };

  return (
    <>
      <EditInput type="text" ref={editInput} />
      <TodoButtonGroup
        isEditMode={isEditMode}
        confirmText="완료"
        cancelText="취소"
        updateTodo={updateTodo}
        cancelEditMode={cancelEditMode as React.MouseEventHandler}
      />
    </>
  );
};

export default EditModeItem;

const EditInput = styled(Input)``;
