import styled from '@emotion/styled';

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0rem 1.2rem;
  width: 100%;
  font-size: 1.6rem;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.wantedSub};
  }
`;

export default Input;
