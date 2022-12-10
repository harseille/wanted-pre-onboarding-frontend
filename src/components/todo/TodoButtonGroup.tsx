import styled from '@emotion/styled';
import { Button } from '../common';

type TProps = {
  isEditMode: boolean;
  confirmText: string;
  cancelText: string;
  updateTodo?: React.MouseEventHandler;
  deleteTodo?: React.MouseEventHandler;
  setEditMode?: React.MouseEventHandler;
  cancelEditMode?: React.MouseEventHandler;
};

const TodoButtonGroup = (props: TProps) => {
  const { isEditMode, confirmText, cancelText } = props;

  return (
    <ButtonGroup>
      <ConfirmButton onClick={isEditMode ? props.updateTodo : props.setEditMode}>{confirmText}</ConfirmButton>
      <CancelButton onClick={isEditMode ? props.cancelEditMode : props.deleteTodo}>{cancelText}</CancelButton>
    </ButtonGroup>
  );
};

export default TodoButtonGroup;

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
