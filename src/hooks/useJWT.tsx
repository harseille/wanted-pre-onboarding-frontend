import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const useJWT = (redirectUrl?: string) => {
  const navigate = useNavigate();

  const getJWT = useMemo(() => () => localStorage.getItem('authToken'), []);

  const setJWT = (token: any) => {
    window.localStorage.setItem('authToken', token.access_token);
    if (redirectUrl) {
      navigate(redirectUrl);
    }
  };

  return { getJWT, setJWT };
};

export default useJWT;
