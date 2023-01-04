import Typography from 'components/business/typography';
import { StyledDescription, StyledImage, StyledNewSolutions } from './styled';

function NewSolutionsSection(): JSX.Element {
  return (
    <StyledNewSolutions>
      <StyledImage />
      <StyledDescription>
        <Typography type="headLine" variant="extraBold" size={1}>
          Radically new solutions for data
        </Typography>
        <Typography type="paragraph" variant="regular" size={0} mt={5}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Typography>
      </StyledDescription>
    </StyledNewSolutions>
  );
}

export default NewSolutionsSection;
