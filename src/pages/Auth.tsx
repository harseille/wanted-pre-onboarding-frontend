import styled from '@emotion/styled';
import { Wrapper, Title, Input } from 'src/components/common';

const Auth = () => (
  <LoginWrapper>
    <LoginForm>
      <AuthTitle>Wanted pre-onboarding, Todo list</AuthTitle>
      <AuthInputContainer>
        <AuthLabel htmlFor="email">이메일</AuthLabel>
        <AuthInput type="email" id="email" />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthLabel htmlFor="password">비밀번호</AuthLabel>
        <AuthInput type="password" id="password" />
      </AuthInputContainer>
      <AuthButton>로그인</AuthButton>
      <SingUpPatagraph>
        아직 회원이 아니신가요? 회원가입을 원하시면 <MoveToSignUpButton>여기</MoveToSignUpButton>를 클릭해주세요
      </SingUpPatagraph>
    </LoginForm>
  </LoginWrapper>
);

export default Auth;

const LoginWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthTitle = styled(Title)`
  margin-bottom: 5rem;
`;

const LoginForm = styled.form`
  width: 45rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 2.5rem;
`;

const AuthInputContainer = styled.div`
  width: 100%;
`;

const AuthLabel = styled.label`
  width: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const AuthInput = styled(Input)`
  margin: 0rem 0rem 0.8rem;
  height: 4rem;
  margin-bottom: 2.5rem;
`;

const AuthButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.wantedMain};
  color: ${({ theme }) => theme.colors.white};
  height: 5rem;
  border-radius: 2.5rem;
  margin: 4rem 0;
`;

const MoveToSignUpButton = styled.button`
  color: ${({ theme }) => theme.colors.wantedSub};
  font-size: 1.4rem;
  font-weight: bold;
`;

const SingUpPatagraph = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;
