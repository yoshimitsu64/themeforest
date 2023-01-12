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

export interface ITestimonialsCards {
  imageURL: string;
  name: string;
  position: string;
  review: string;
}

export interface IBlog {
  imageURL: string;
  date: string;
  author: string;
  title: string;
  text: string;
  views: number;
  tags: Array<string>;
  id: string;
  partOfText: string;
}

export type PopularBlogProps = Pick<IBlog, 'imageURL' | 'date' | 'title' | 'id'>;
