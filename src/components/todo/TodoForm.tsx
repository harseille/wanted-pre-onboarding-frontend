import React, { useContext, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Input, Button } from 'src/components/common';
import TodoContext from 'src/store/todo/todo-context';

const TodoForm = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);

  useEffect(() => {
    todoInputRef.current?.focus();
  }, []);

  const submitTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    todoCtx.addTodo(todoInputRef.current!.value);
    todoInputRef.current!.value = '';
  };

  return (
    <Form onSubmit={submitTodoHandler}>
      <TodoInput type="text" placeholder="할 일을 입력해주세요" ref={todoInputRef} />
      <SubmitButton>추가</SubmitButton>
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
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
