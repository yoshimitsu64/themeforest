import { ArrowRightFilled } from '@fluentui/react-icons';

import {
  StyledServiceCard,
  StyledServiceCardLogo,
  StyledServiceCardTitle,
  StyledServiceCardDescription,
  StyledReadMoreContainer,
  StyledReadMore,
} from './styled';

interface IProps {
  imageURL: string;
  title: string;
  children: string;
}

const ServiceCard = ({ imageURL, title, children }: IProps): JSX.Element => {
  return (
    <StyledServiceCard>
      <StyledServiceCardLogo imageURL={imageURL} />
      <StyledServiceCardTitle>{title}</StyledServiceCardTitle>
      <StyledServiceCardDescription>{children}</StyledServiceCardDescription>
      <StyledReadMoreContainer>
        <StyledReadMore>Read more</StyledReadMore>
        <ArrowRightFilled />
      </StyledReadMoreContainer>
    </StyledServiceCard>
  );
};

export default ServiceCard;
