import { useRef } from 'react';

import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

import { contactFormFields, formFieldsName } from 'constants/contactFormFields';
import { emailContactConfig } from 'config/emailJS';
import { contactFormSchema } from 'validation/emailValidation';

import TextField from 'components/business/textField';
import LargeButtonFill from 'components/ui/buttons/largeButtonFill';

import { StyledContactUsForm, StyledTitle } from './styled';

const ContactUsFormBlank = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: formFieldsName,
    validationSchema: contactFormSchema,
    onSubmit: (_, { resetForm }) => {
      emailjs
        .sendForm(
          emailContactConfig.serviceID,
          emailContactConfig.templateID,
          formRef.current!,
          emailContactConfig.publicKey
        )
        .then(() => {
          resetForm({
            values: {
              user_email: '',
              user_name: '',
              user_theme: '',
              user_message: '',
            },
          });
        });
    },
  });

  return (
    <StyledContactUsForm ref={formRef} onSubmit={formik.handleSubmit}>
      <StyledTitle>Contact us</StyledTitle>
      {contactFormFields.map(({ name, title, type, autoComplete }) => (
        <TextField
          name={name}
          title={title}
          type={type}
          autoComplete={autoComplete}
          onChange={formik.handleChange}
          value={formik.values[name]}
          error={formik.touched && formik.errors[name]}
        />
      ))}
      <LargeButtonFill>Send</LargeButtonFill>
    </StyledContactUsForm>
  );
};

export default ContactUsFormBlank;
