import Typography from 'components/typography';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { StyledDescription } from './styled';

function DescriptionSection(): JSX.Element {
  const { isMobile } = useMediaQuery();

  return !isMobile ? (
    <StyledDescription>
      <Typography type="headLine" variant="extraBold" size={1} mb={20}>
        The benefits of Ensome
      </Typography>
      <Typography type="paragraph" variant="regular" size={0} mb={20}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </Typography>
    </StyledDescription>
  ) : (
    <StyledDescription>
      <Typography type="headLine" variant="extraBold" size={2} mb={20} ml={15} mr={15}>
        The benefits of Ensome
      </Typography>
      <Typography type="paragraph" variant="regular" size={2} ml={15} mr={15}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </Typography>
    </StyledDescription>
  );
}

export default DescriptionSection;
