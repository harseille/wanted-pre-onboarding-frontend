import styled from '@emotion/styled';
import { Button } from '../common';

type TProps = {
  confirmText: string;
  cancelText: string;
  onClickPositive: React.MouseEventHandler;
  onClickNegative: React.MouseEventHandler;
};

const TodoButtonGroup = (props: TProps) => {
  const { confirmText, cancelText, onClickPositive, onClickNegative } = props;

  return (
    <ButtonGroup>
      <PositiveButton onClick={onClickPositive}>{confirmText}</PositiveButton>
      <NegativeButton onClick={onClickNegative}>{cancelText}</NegativeButton>
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

const PositiveButton = styled(Button)`
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
const NegativeButton = styled(Button)`
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
