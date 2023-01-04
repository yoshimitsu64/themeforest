import Typography from 'components/business/typography';
import { useState } from 'react';

import { Add20Filled, LineHorizontal120Filled } from '@fluentui/react-icons';

import { StyledFaqCard, StyledCardHeader, StyledIcon } from './styled';

const FaqCard = (): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean | null>(null);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <StyledFaqCard className="faq-card" isShown={isShown}>
      <StyledCardHeader onClick={handleClick}>
        <Typography type="headLine" variant="bold" size={0} color="primary">
          What are data analytics?
        </Typography>
        <StyledIcon>{isShown ? <LineHorizontal120Filled /> : <Add20Filled />}</StyledIcon>
      </StyledCardHeader>
      <Typography type="paragraph" variant="regular" size={0} mt={20}>
        Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
        euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
        orci. Sed quis lobortis eros.
      </Typography>
    </StyledFaqCard>
  );
};

export default FaqCard;
