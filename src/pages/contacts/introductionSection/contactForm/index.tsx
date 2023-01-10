import { useMediaQuery } from 'hooks/useMediaQuery';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

import { IInputsState, InputVariant } from 'appTypes/index';

import EmailButton from 'components/buttons/emailButton';

import { validateInput, checkInputs, sendEmail } from 'helpers';

import {
  StyledContactForm,
  StyledHeaderInput,
  StyledThemeInput,
  StyledMessageInput,
  StyledHeaderInputMobile,
  StyledContactFormMobile,
} from './styled';

const initialState = {
  user_email: false,
  user_name: false,
  user_theme: false,
  user_message: false,
};

function ContactForm(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);

  const [inputVariant, setInputVariant] = useState<InputVariant['variant']>('disabled');
  const [inputState, setInputState] = useState<IInputsState>(() => initialState);

  const { isMobile } = useMediaQuery();

  const Input = isMobile ? StyledHeaderInputMobile : StyledHeaderInput;
  const Form = isMobile ? StyledContactFormMobile : StyledContactForm;

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
    <Form ref={formRef} onSubmit={handleClick}>
      <Input
        name="user_email"
        placeholder="Your email"
        onChange={handleChange}
        error={inputState.user_email}
      />
      <Input
        name="user_name"
        placeholder="Your name"
        error={inputState.user_name}
        autoComplete="off"
        onChange={handleChange}
      />
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
      <EmailButton variant={inputVariant} value="Send" color="primary" />
    </Form>
  );
}

export default ContactForm;
