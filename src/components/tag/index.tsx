import { IProps } from './types';
import { StyledTag } from './styled';

const Tag = ({ text }: IProps): JSX.Element => {
  return <StyledTag>{text}</StyledTag>;
};

export default Tag;
