import { memo } from 'react';

import { ArrowRightFilled } from '@fluentui/react-icons';

import {
  StyledSolutionCard,
  StyledCardImage,
  StyledCardTitle,
  StyledCardSubtitle,
  StyledReadMoreContainer,
  StyledReadMore,
} from './styled';

interface IProps {
  image: JSX.Element;
  title: string;
  subtitle: string;
}

const SolutionCard = ({ image, title, subtitle }: IProps): JSX.Element => {
  return (
    <StyledSolutionCard className="solution-card">
      <StyledCardImage>{image}</StyledCardImage>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardSubtitle>{subtitle}</StyledCardSubtitle>
      <StyledReadMoreContainer>
        <StyledReadMore>Read more</StyledReadMore>
        <ArrowRightFilled />
      </StyledReadMoreContainer>
    </StyledSolutionCard>
  );
};

export default memo(SolutionCard);
