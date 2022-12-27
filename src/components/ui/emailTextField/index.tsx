import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import { InputVariant } from 'appTypes/index';

import { emailJsConfig } from 'config/emailJS';

import { useEmailDebounce } from 'hooks/useEmailDebounce';

import { emailSchemaActive, emailSchemaStatic } from 'validation/emailValidation';

import EmailButton from 'components/ui/buttons/emailButton';

import { StyledEmailTextField, StyledInput } from './styled';

const EmailTextField = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const [inputVariant, setInputVariant] = useState<InputVariant['variant']>('ok');
  const [email, setEmail] = useState<string>('');

  const [isEmailValid, setIsEmailValid] = useEmailDebounce(email);

  const handleClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const isValid = await emailSchemaStatic.isValid({ email: email });

    if (isValid) {
      emailjs.sendForm(
        emailJsConfig.serviceID,
        emailJsConfig.templateID,
        formRef.current!,
        emailJsConfig.publicKey
      );
      setInputVariant('disabled');
    }
  };

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
        <EmailButton variant={inputVariant} onClick={handleClick} value={'Send'} />
      </StyledEmailTextField>
    </form>
  );
};

export default EmailTextField;
