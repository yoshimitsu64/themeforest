import Typography from 'components/business/typography';
import Image from 'assets/images/homePage/02_img_10.jpg';

import { StyledNewSolutions, StyledImageContainer } from './styled';

function NewSolutionsSectionMobile(): JSX.Element {
  return (
    <StyledNewSolutions>
      <Typography type="headLine" variant="extraBold" size={2} m={15}>
        Radically new solutions for data
      </Typography>
      <StyledImageContainer>
        <img src={Image} alt="New solutions" />
      </StyledImageContainer>
      <Typography type="paragraph" variant="regular" size={2} m={15} color="grey">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo.
      </Typography>
    </StyledNewSolutions>
  );
}

export default NewSolutionsSectionMobile;
