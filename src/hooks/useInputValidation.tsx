import React, { useState } from 'react';

type T_VALIDATION_RULES = {
  [key: string]: Function;
};

const VALIDATION_RULES: T_VALIDATION_RULES = {
  email: (value: string) => value.includes('@'),
  password: (value: string) => value.length >= 8,
};

const useInputValidation = (targetRef: React.RefObject<HTMLInputElement>) => {
  const [isValid, setIsValid] = useState(false);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsValid(VALIDATION_RULES[targetRef.current!.id](targetRef.current!.value));
  };

  return {
    isValid,
    changeHandler,
  };
};

export default useInputValidation;
