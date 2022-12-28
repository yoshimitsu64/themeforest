export const checkInputs = (inputs: {
  user_email: boolean;
  user_name: boolean;
  user_theme: boolean;
  user_message: boolean;
}) => {
  return Object.values(inputs).includes(false);
};
