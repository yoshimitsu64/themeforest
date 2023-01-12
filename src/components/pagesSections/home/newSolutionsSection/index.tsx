import { useMediaQuery } from 'hooks/index';

import Image from 'assets/images/homePage/02_img_10.jpg';

import Typography from 'components/typography';

import {
  StyledDescription,
  StyledNewSolutions,
  StyledImageContainer,
  StyledNewSolutionsMobile,
} from './styled';

function NewSolutionsSection(): JSX.Element {
  const { isDesktopOrTablet, isDesktop, isMobile, isTablet } = useMediaQuery();

  const NewSolutions = isTablet || isMobile ? StyledNewSolutionsMobile : StyledNewSolutions;

  return (
    <NewSolutions>
      {(isMobile || isTablet) && (
        <Typography type="headLine" variant="extraBold" size={2} mt={40} mb={20} textAlign="center">
          Radically new solutions for data
        </Typography>
      )}
      <StyledImageContainer>
        <img src={Image} alt="New solutions" />
      </StyledImageContainer>
      {(isMobile || isTablet) && (
        <Typography type="paragraph" variant="regular" size={2} mt={20} mb={30} color="grey">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </Typography>
      )}
      {(isDesktop || isDesktopOrTablet) && (
        <StyledDescription>
          {isDesktop && (
            <>
              <Typography type="headLine" variant="extraBold" size={1}>
                Radically new solutions for data
              </Typography>
              <Typography type="paragraph" variant="regular" size={0} mt={5} color="grey">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </>
          )}
          {isDesktopOrTablet && (
            <>
              <Typography type="headLine" variant="extraBold" size={2}>
                Radically new solutions for data
              </Typography>
              <Typography type="paragraph" variant="regular" size={1} mt={5} color="grey">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </>
          )}
        </StyledDescription>
      )}
    </NewSolutions>
  );
}

export default NewSolutionsSection;
