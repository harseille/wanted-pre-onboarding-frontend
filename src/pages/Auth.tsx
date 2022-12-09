import styled from '@emotion/styled';

const Auth = () => (
  <Wrapper>
    <LoginForm>
      <Title>Wanted pre-onboarding, Todo list</Title>
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
  </Wrapper>
);

export default Auth;

const Wrapper = styled.div`
  max-width: 106rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 45rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.white};
  padding: 5rem 2.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;

const AuthInputContainer = styled.div`
  width: 100%;
`;

const AuthLabel = styled.label`
  width: 100%;
  display: inline-block;
  color: #888;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const AuthInput = styled.input`
  border: 1px solid #e1e2e3;
  border-radius: 0.5rem;
  color: #333;
  padding: 0rem 1.2rem;
  margin: 0rem 0rem 0.8rem;
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
`;

const AuthButton = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.wantedMain};
  color: ${props => props.theme.colors.white};
  height: 5rem;
  border-radius: 2.5rem;
  margin: 4rem 0;
`;

const MoveToSignUpButton = styled.button`
  color: ${props => props.theme.colors.wantedSub};
  font-size: 1.4rem;
  font-weight: bold;
`;

const SingUpPatagraph = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;
