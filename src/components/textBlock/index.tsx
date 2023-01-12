import { useMediaQuery } from 'hooks';

import { IProps } from './types';
import { StyledTextBlock, StyledContainer, StyledContainerMobile } from './styled';

const TextBlock = ({ children, mt, mb }: IProps): JSX.Element => {
  const { isMobile } = useMediaQuery();

  const Container = isMobile ? StyledContainerMobile : StyledContainer;

  return (
    <StyledTextBlock mb={mb} mt={mt}>
      <Container>{children}</Container>
    </StyledTextBlock>
  );
};

export default TextBlock;
