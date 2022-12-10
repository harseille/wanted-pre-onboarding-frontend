import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { AuthTitle, AuthInput } from 'src/components/auth';
import { useInputValidation, useAuth } from 'src/hooks';

const AuthForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { isValid: isEmailValid, changeHandler: changeEmailHandler } = useInputValidation(emailInputRef);
  const { isValid: isPasswordValid, changeHandler: changePasswordHandler } = useInputValidation(passwordInputRef);

  const { isSignUp, clickMoveToSingnUpButtonHandler, submitAuthInfoHandler } = useAuth({
    emailInputRef,
    passwordInputRef,
  });

  useEffect(() => {
    emailInputRef.current!.value = '';
    passwordInputRef.current!.value = '';
    emailInputRef.current!.focus();
  }, [isSignUp]);

  return (
    <AuthFormContainer onSubmit={submitAuthInfoHandler}>
      <AuthTitle />
      <AuthInput inputType="email" inputRef={emailInputRef} changeValueHandler={changeEmailHandler} />
      <AuthInput inputType="password" inputRef={passwordInputRef} changeValueHandler={changePasswordHandler} />
      <AuthButton isValid={isEmailValid && isPasswordValid}>{!isSignUp ? '로그인' : '회원가입'}</AuthButton>
      {!isSignUp ? (
        <SingUpPatagraph>
          아직 회원이 아니신가요? 회원가입을 원하시면{' '}
          <MoveToSignUpButton type="button" onClick={clickMoveToSingnUpButtonHandler}>
            여기
          </MoveToSignUpButton>
          를 클릭해주세요
        </SingUpPatagraph>
      ) : null}
    </AuthFormContainer>
  );
};
export default AuthForm;

const AuthFormContainer = styled.form`
  width: 45rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem 2.5rem;
`;

const AuthButton = styled.button<{ isValid: boolean }>`
  width: 100%;
  background: ${({ theme, isValid }) => (isValid ? theme.colors.wantedMain : theme.colors.gray300)};
  color: ${({ theme }) => theme.colors.white};
  height: 5rem;
  border-radius: 2.5rem;
  margin: 4rem 0;
  disabled: ${props => props.isValid};
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
