export type ForwardRef = {
  closeModal(b: boolean): void;
  isOpened: boolean;
};

export type InputVariant = {
  variant?: 'ok' | 'error' | 'disabled';
  color?: string;
};

export interface IInputsState {
  user_email: boolean;
  user_name: boolean;
  user_theme: boolean;
  user_message: boolean;
}
