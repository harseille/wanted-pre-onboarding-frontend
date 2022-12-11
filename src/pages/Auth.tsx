import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from 'src/components/auth';
import { Wrapper } from 'src/components/common';
import { useJWT } from 'src/hooks';
import styled from '@emotion/styled';

const Auth = () => {
  const { getJWT } = useJWT();
  const navigate = useNavigate();
  useEffect(() => {
    if (getJWT()) {
      navigate('/todo');
    }
  }, [getJWT, navigate]);

  return (
    <LoginWrapper>
      <AuthForm />
    </LoginWrapper>
  );
};

export default Auth;

const LoginWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
