import { IBlog } from 'appTypes/index';

export interface IProps {
  results: Array<IBlog>;
  onClick: (isActive: boolean) => () => void;
}
