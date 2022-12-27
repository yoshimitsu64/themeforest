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
