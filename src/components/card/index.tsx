import { StyledCard } from './styled';

interface Iprops {
  children: JSX.Element[];
}

const Card = ({ children }: Iprops): JSX.Element => {
  return <StyledCard className="card">{children}</StyledCard>;
};

export default Card;
