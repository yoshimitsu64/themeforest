import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import { InputVariant } from 'appTypes/index';

import { emailSubscribeConfig } from 'config/emailJS';

import { useEmailDebounce } from 'hooks/index';

import { emailSchemaActive, emailSchemaStatic } from 'validation/emailValidation';

import EmailButton from 'components/buttons/emailButton';

import { StyledEmailTextField, StyledInput } from './styled';

function EmailTextField(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const [inputVariant, setInputVariant] = useState<InputVariant['variant']>('ok');
  const [email, setEmail] = useState<string>('');

  const [isEmailValid, setIsEmailValid] = useEmailDebounce(email);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLInputElement>) => {
      e.preventDefault();

      const isValid = await emailSchemaStatic.isValid({ email });

      if (isValid) {
        await emailjs.sendForm(
          emailSubscribeConfig.serviceID,
          emailSubscribeConfig.templateID,
          formRef.current!,
          emailSubscribeConfig.publicKey
        );
        setInputVariant('disabled');
      }
    },
    [email]
  );

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const copy = e.target.value;
    const isValid = await emailSchemaActive.isValid({ email: copy });
    if (isValid) {
      setEmail(copy);
      setIsEmailValid(true);
      setInputVariant('ok');

      return;
    }
    setInputVariant('error');
  };

  useEffect(() => {
    if (email.length > 0 && !isEmailValid) {
      setInputVariant('error');
    } else {
      setInputVariant('ok');
    }
  }, [isEmailValid]);

  return (
    <form ref={formRef}>
      <StyledEmailTextField variant={inputVariant}>
        <StyledInput
          type="text"
          name="user_email"
          placeholder="Your email"
          onChange={handleChange}
          value={email}
          disabled={inputVariant === 'disabled'}
        />
        <EmailButton variant={inputVariant} onClick={handleClick} value="Send" />
      </StyledEmailTextField>
    </form>
  );
}

export default EmailTextField;
