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

export interface ITeamMemberCard {
  name: string;
  speciality: string;
  imageURL: string;
  id: number;
}

export interface IContactFormFields {
  [key: string]: string;
  user_email: string;
  user_name: string;
  user_theme: string;
  user_message: string;
}
