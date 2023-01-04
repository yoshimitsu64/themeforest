import Typography from 'components/business/typography';

import { StyledDescription } from './styled';

function DescriptionSection(): JSX.Element {
  return (
    <StyledDescription>
      <Typography type="headLine" variant="extraBold" size={1} mb={20}>
        The benefits of Ensome
      </Typography>
      <Typography type="paragraph" variant="regular" size={0}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </Typography>
    </StyledDescription>
  );
}

export default DescriptionSection;
