import { useDebugValue, useEffect, useState } from 'react';

import { emailSchemaStatic } from 'validation/emailValidation';

export const useEmailDebounce = (email: string) => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  useDebugValue(isEmailValid ? 'Email valid' : 'Email not valid');

  useEffect(() => {
    if (!email) return;
    const emailTimeout = setTimeout(async () => {
      const isValid = await emailSchemaStatic.isValid({ email: email });
      isValid ? setIsEmailValid(true) : setIsEmailValid(false);
    }, 1000);

    return () => clearTimeout(emailTimeout);
  }, [email]);

  return [isEmailValid, setIsEmailValid] as const;
};
