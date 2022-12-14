import { memo, useState } from 'react';
import styled from '@emotion/styled';
import { TTodo, TTodoMode } from 'src/typing/todo';
import EditModeItem from './EditModeItem';
import ViewModeItem from './ViewModeItem';

type TProps = {
  todoInfo: TTodo;
};

const TodoItem = (props: TProps) => {
  const [todoMode, setTodoMode] = useState<TTodoMode>('view');
  const { todoInfo } = props;

  const changeTodoMode = () => {
    if (todoMode === 'view') setTodoMode('edit');
    if (todoMode === 'edit') setTodoMode('view');
  };

  return (
    <Item key={todoInfo.id}>
      {todoMode === 'edit' && <EditModeItem todoInfo={todoInfo} changeTodoMode={changeTodoMode} />}
      {todoMode === 'view' && <ViewModeItem todoInfo={todoInfo} changeTodoMode={changeTodoMode} />}
    </Item>
  );
};

export default memo(TodoItem);

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 4rem;
  margin-bottom: 2.5rem;
`;
