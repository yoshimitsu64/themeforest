import { StyledFooterBottom, StyledText, StyledPrivacyPolicy, StyledContainer } from './styled';

function FooterBottom(): JSX.Element {
  return (
    <StyledFooterBottom>
      <StyledContainer>
        <StyledText>Ensome© 2022 All Rights Reserved</StyledText>
        <StyledPrivacyPolicy>
          <StyledText>Privacy policy</StyledText>
          <StyledText>Terms of us</StyledText>
        </StyledPrivacyPolicy>
      </StyledContainer>
    </StyledFooterBottom>
  );
}

export default FooterBottom;
