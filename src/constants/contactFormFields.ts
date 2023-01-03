import { IContactFormFields } from 'appTypes/index';

export const contactFormFields = [
  {
    title: 'Name',
    type: 'text',
    name: 'user_name',
    autoComplete: 'off',
  },
  {
    title: 'Email',
    type: 'text',
    name: 'user_email',
    autoComplete: 'on',
  },
  {
    title: 'Theme',
    type: 'text',
    name: 'user_theme',
    autoComplete: 'off',
  },
  {
    title: 'Message',
    type: 'text',
    name: 'user_message',
    autoComplete: 'off',
  },
];

export const formFieldsName: IContactFormFields = {
  user_email: '',
  user_name: '',
  user_theme: '',
  user_message: '',
};
