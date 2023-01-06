import { useState } from 'react';

import { Add20Filled, LineHorizontal120Filled } from '@fluentui/react-icons';

import Typography from 'components/business/typography';

import { IProps } from './types';
import { StyledFaqCard, StyledCardHeader, StyledIcon } from './styled';

const FaqCard = ({ title, text }: IProps): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean | null>(null);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <StyledFaqCard className="faq-card" isShown={isShown}>
      <StyledCardHeader onClick={handleClick}>
        <Typography type="headLine" variant="bold" size={0} color="primary">
          {title}
        </Typography>
        <StyledIcon>{isShown ? <LineHorizontal120Filled /> : <Add20Filled />}</StyledIcon>
      </StyledCardHeader>
      <Typography type="paragraph" variant="regular" size={0} mt={20}>
        {text}
      </Typography>
    </StyledFaqCard>
  );
};

export default FaqCard;
