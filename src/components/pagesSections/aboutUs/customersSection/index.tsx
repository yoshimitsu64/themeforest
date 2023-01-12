import { logos } from 'mocks/index';

import {
  StyledCustomersSection,
  StyledContainer,
  StyledTilte,
  StyledSubtitle,
  StyledLogosContainer,
  StyledLogo,
} from './styled';

const CustomersSection = (): JSX.Element => {
  return (
    <StyledCustomersSection>
      <StyledContainer>
        <StyledTilte>Our customers</StyledTilte>
        <StyledSubtitle>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudan, totam rem aperiam.
        </StyledSubtitle>
        <StyledLogosContainer>
          {logos.map((imageURL, index) => (
            <StyledLogo imageURL={imageURL} key={index} />
          ))}
        </StyledLogosContainer>
      </StyledContainer>
    </StyledCustomersSection>
  );
};

export default CustomersSection;
