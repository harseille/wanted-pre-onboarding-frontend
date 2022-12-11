import { useCallback } from 'react';

type TRequestProps = {
  method: string;
  headers: Headers;
  body?: string;
};

const useHttp = () => {
  const sendRequest = useCallback(async (url: string, requestConfig: TRequestProps, applyData: Function) => {
    try {
      const response = await fetch(`https://pre-onboarding-selection-task.shop/${url}`, requestConfig);

      if (!response.ok) {
        throw new Error('http 통신 error');
      }

      const data = await response.json();
      applyData(data);
    } catch (error: unknown) {
      console.log(error);
    }
  }, []);

  return sendRequest;
};

export default useHttp;
