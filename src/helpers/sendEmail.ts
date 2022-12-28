import { FormEvent, RefObject } from 'react';

import emailjs from '@emailjs/browser';

import { contactFormSchema } from 'validation/emailValidation';

import { emailContactConfig } from 'config/emailJS';

interface FormElements extends HTMLFormElement {
  user_email: string;
  user_name: string;
  user_theme: string;
  user_message: string;
}

export const sendEmail = async (
  formRef: RefObject<HTMLFormElement>,
  e: FormEvent<FormElements | HTMLFormElement>
) => {
  const formData = {
    user_email: e.currentTarget.user_email.value,
    user_name: e.currentTarget.user_name.value,
    user_theme: e.currentTarget.user_theme.value,
    user_message: e.currentTarget.user_message.value,
  };

  const isValid = await contactFormSchema.isValid(formData);

  if (isValid) {
    await emailjs.sendForm(
      emailContactConfig.serviceID,
      emailContactConfig.templateID,
      formRef.current!,
      emailContactConfig.publicKey
    );
  }
};
