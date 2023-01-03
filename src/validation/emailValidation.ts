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
    .matches(/^[A-Za-z@.]*$/, 'You cant whire this character')
    .min(0)
    .max(50, 'MaximumLength is 50')
    .required('Email should not be empty!')
    .email('This isnt email'),
  user_name: yup
    .string()
    .matches(/^[A-Za-z@.]*$/, 'Name should have a letters')
    .min(3, 'Minimum length is 3')
    .max(50, 'MaximumLength is 50')
    .required('Name should not be empty'),
  user_theme: yup
    .string()
    .min(5, 'Minimum length is 5')
    .max(50, 'MaximumLength is 50')
    .required('Should not be empty'),
  user_message: yup
    .string()
    .min(5, 'Minimum length is 5')
    .max(50, 'MaximumLength is 50')
    .required('Should not be empty'),
});
