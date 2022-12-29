import { useState } from 'react';

import { Add20Filled, LineHorizontal120Filled } from '@fluentui/react-icons';

import { StyledFaqCard, StyledTitle, StyledSubtitle, StyledCardHeader, StyledIcon } from './styled';

const FaqCard = (): JSX.Element => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <StyledFaqCard className="faq-card" isShown={isShown}>
      <StyledCardHeader>
        <StyledTitle onClick={handleClick}>What are data analytics?</StyledTitle>
        <StyledIcon onClick={handleClick}>
          {isShown ? <LineHorizontal120Filled /> : <Add20Filled />}
        </StyledIcon>
      </StyledCardHeader>
      <StyledSubtitle isShown={isShown}>
        Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
        euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula id, lacinia auctor
        orci. Sed quis lobortis eros.
      </StyledSubtitle>
    </StyledFaqCard>
  );
};

export default FaqCard;
