import { memo, useState } from 'react';
import styled from '@emotion/styled';
import { TTodo } from 'src/typing/todo';
import EditModeItem from './EditModeItem';
import ViewModeItem from './ViewModeItem';

type TProps = {
  todoInfo: TTodo;
};

const TodoItem = (props: TProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { todoInfo } = props;

  const setEditModeHandler = () => {
    setIsEditMode(true);
  };

  const cancelEditModeHandler = () => {
    setIsEditMode(false);
  };

  return (
    <Item key={todoInfo.id}>
      {isEditMode ? (
        <EditModeItem todoInfo={todoInfo} isEditMode={isEditMode} cancelEditMode={cancelEditModeHandler} />
      ) : (
        <ViewModeItem todoInfo={todoInfo} isEditMode={isEditMode} setEditMode={setEditModeHandler} />
      )}
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
