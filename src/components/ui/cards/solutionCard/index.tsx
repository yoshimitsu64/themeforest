import Typography from 'components/business/typography';
import { memo } from 'react';

import { ArrowRightFilled } from '@fluentui/react-icons';

import { IProps } from './types';
import { StyledSolutionCard, StyledCardImage } from './styled';

const SolutionCard = ({ image, title, subtitle }: IProps): JSX.Element => {
  return (
    <StyledSolutionCard className="solution-card">
      <StyledCardImage>{image}</StyledCardImage>
      <Typography type="headLine" variant="bold" size={1}>
        {title}
      </Typography>
      <Typography type="paragraph" variant="regular" size={2}>
        {subtitle}
      </Typography>
      <Typography type="headLine" variant="semiBold" size={0} color="primary" mt={10}>
        Read more &nbsp; <ArrowRightFilled />
      </Typography>
    </StyledSolutionCard>
  );
};

export default memo(SolutionCard);
