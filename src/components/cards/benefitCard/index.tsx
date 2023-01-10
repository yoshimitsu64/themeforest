import Typography from 'components/typography';
import { IProps } from './types';
import { StyledCard, StyledImage } from './styled';

function Card({ title, subtitle, image }: IProps): JSX.Element {
  return (
    <StyledCard className="card">
      <StyledImage>{image}</StyledImage>
      <Typography type="headLine" variant="bold" size={1} mt={20}>
        {title}
      </Typography>
      <Typography type="paragraph" variant="regular" size={2}>
        {subtitle}
      </Typography>
    </StyledCard>
  );
}

export default Card;
