import * as yup from 'yup';

export const emailSchemaActive = yup.object().shape({
  email: yup
    .string()
    .matches(/^[A-Za-z@.]*$/)
    .min(0)
    .max(50),
});

export const emailSchemaStatic = yup.object().shape({
  email: yup.string().email().required(),
});

export const contactFormSchema = yup.object().shape({
  user_email: yup
    .string()
    .matches(/^[A-Za-z@.]*$/)
    .min(0)
    .max(50)
    .required()
    .email(),
  user_name: yup
    .string()
    .matches(/^[A-Za-z@.]*$/)
    .min(3)
    .max(50),
  user_theme: yup.string().min(5).max(50),
  user_message: yup.string().min(5).max(50),
});
