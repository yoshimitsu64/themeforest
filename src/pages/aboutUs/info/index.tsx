import { IProps } from './types';
import { StyledInfo, StyledDescription, StyledTitle, StyledSubtitle, StyledImage } from './styled';

const Info = ({
  title,
  subtitle,
  imageURL,
  reversed = false,
  mt = 0,
  mb = 0,
}: IProps): JSX.Element => {
  return (
    <StyledInfo reversed={reversed} mb={mb} mt={mt}>
      <StyledDescription>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledDescription>
      <StyledImage imageURL={imageURL} />
    </StyledInfo>
  );
};

export default Info;
