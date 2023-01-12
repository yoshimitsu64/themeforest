import { IBlog } from 'appTypes/index';

export interface IProps {
  imageURL: string;
  date: string;
  name: string;
  text: string;
}

export type Props = Pick<IBlog, 'imageURL' | 'date' | 'title' | 'partOfText' | 'id'>;
