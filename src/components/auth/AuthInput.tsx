import styled from '@emotion/styled';
import { Input } from 'src/components/common';

type Tprops = {
  inputType: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  changeValueHandler: React.ChangeEventHandler<HTMLInputElement>;
};

const AuthInput = (props: Tprops) => {
  const { inputType, inputRef, changeValueHandler } = props;
  type TlabelText = {
    [key: string]: '이메일' | '비밀번호';
  };

  const labelText: TlabelText = {
    email: '이메일',
    password: '비밀번호',
  };

  return (
    <InputContainer>
      <Label htmlFor={inputType}>{labelText[inputType]}</Label>
      <InputArea type={inputType} id={inputType} ref={inputRef} onChange={changeValueHandler} />
    </InputContainer>
  );
};

export default AuthInput;

const InputContainer = styled.div`
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const InputArea = styled(Input)`
  margin: 0rem 0rem 0.8rem;
  height: 4rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
`;
