import React, { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import { IInputsState, InputVariant } from 'appTypes/index';

import EmailButton from 'components/ui/buttons/emailButton';

import { validateInput, checkInputs, sendEmail } from 'helpers';

import {
  StyledContactFormHeader,
  StyledContactForm,
  StyledHeaderInput,
  StyledThemeInput,
  StyledMessageInput,
} from './styled';

const ContactForm = (): JSX.Element => {
  const initialState = useMemo(() => {
    return {
      user_email: false,
      user_name: false,
      user_theme: false,
      user_message: false,
    };
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const [inputVariant, setInputVariant] = useState<InputVariant['variant']>('disabled');
  const [inputState, setInputState] = useState<IInputsState>(() => initialState);

  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendEmail(formRef, e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    validateInput(e).then((res) => {
      setInputState({
        ...inputState,
        ...res,
      });
    });
  };

  useEffect(() => {
    if (checkInputs(inputState)) {
      setInputVariant('disabled');
    } else {
      setInputVariant('ok');
    }
  }, [inputState]);

  return (
    <StyledContactForm ref={formRef} onSubmit={handleClick}>
      <StyledContactFormHeader>
        <StyledHeaderInput
          name="user_email"
          placeholder="Your email"
          onChange={handleChange}
          error={inputState.user_email}
        />
        <StyledHeaderInput
          name="user_name"
          placeholder="Your name"
          error={inputState.user_name}
          autoComplete="off"
          onChange={handleChange}
        />
      </StyledContactFormHeader>
      <StyledThemeInput
        name="user_theme"
        placeholder="Your theme"
        error={inputState.user_theme}
        autoComplete="off"
        onChange={handleChange}
      />
      <StyledMessageInput
        name="user_message"
        placeholder="Your message"
        autoComplete="off"
        error={inputState.user_message}
        onChange={handleChange}
      />
      <EmailButton variant={inputVariant} value={'Send'} color="primary" />
    </StyledContactForm>
  );
};

export default ContactForm;
