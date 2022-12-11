import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttp, useJWT } from 'src/hooks';

type TProp = {
  emailInputRef: React.RefObject<HTMLInputElement>;
  passwordInputRef: React.RefObject<HTMLInputElement>;
};

const useAuth = (props: TProp) => {
  const { emailInputRef, passwordInputRef } = props;
  const [isSignUp, setIsSigUp] = useState(false);
  const sendRequest = useHttp();
  const { setJWT } = useJWT();
  const navigate = useNavigate();

  const clickMoveToSingnUpButtonHandler = () => {
    setIsSigUp(true);
  };

  const authentificate = (data: string) => {
    setJWT(data);
    navigate('/todo');
  };

  const submitAuthInfoHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const url = isSignUp ? 'auth/signup' : 'auth/signin';

    sendRequest(
      url,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          email: emailInputRef.current?.value,
          password: passwordInputRef.current?.value,
        }),
      },
      authentificate
    );
  };
  return { isSignUp, clickMoveToSingnUpButtonHandler, submitAuthInfoHandler };
};

export default useAuth;
