import { StyledDescription, StyledSubtitle, StyledTitle } from './styled';

function DescriptionSection(): JSX.Element {
  return (
    <StyledDescription>
      <StyledTitle>The benefits of Ensome </StyledTitle>
      <StyledSubtitle>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </StyledSubtitle>
    </StyledDescription>
  );
}

export default DescriptionSection;
