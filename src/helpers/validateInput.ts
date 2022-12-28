import React from 'react';
import { contactFormSchema } from 'validation/emailValidation';
import { reach } from 'yup';

export const validateInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
  try {
    await reach(contactFormSchema, event.target.name).validate(event.target.value);
    return { [event.target.name]: true };
  } catch (e) {
    return { [event.target.name]: false };
  }
};
