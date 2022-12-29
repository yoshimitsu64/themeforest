import {
  StyledDescription,
  StyledTitle,
  StyledImage,
  StyledSubtitle,
  StyledNewSolutions,
} from './styled';

function NewSolutionsSection(): JSX.Element {
  return (
    <StyledNewSolutions>
      <StyledImage />
      <StyledDescription>
        <StyledTitle>Radically new solutions for data</StyledTitle>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </StyledSubtitle>
      </StyledDescription>
    </StyledNewSolutions>
  );
}

export default NewSolutionsSection;
