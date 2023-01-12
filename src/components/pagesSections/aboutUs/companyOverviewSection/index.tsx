import {
  StyledIntroductionSection,
  StyledContainer,
  StyledTitle,
  StyledAdvantagesContainer,
  StyledAdvantage,
  StyledNumber,
  StyledText,
  StyledDevider,
} from './styled';

const CompanyOverviewSection = (): JSX.Element => {
  return (
    <StyledIntroductionSection>
      <StyledContainer>
        <StyledTitle>Ensome in numbers</StyledTitle>
        <StyledAdvantagesContainer>
          <StyledAdvantage>
            <StyledNumber>1830+</StyledNumber>
            <StyledText>Project executed</StyledText>
          </StyledAdvantage>
          <StyledDevider />
          <StyledAdvantage>
            <StyledNumber>220</StyledNumber>
            <StyledText>Data analytics</StyledText>
          </StyledAdvantage>
          <StyledDevider />
          <StyledAdvantage>
            <StyledNumber>390</StyledNumber>
            <StyledText>Data management</StyledText>
          </StyledAdvantage>
          <StyledDevider />
          <StyledAdvantage>
            <StyledNumber>834+</StyledNumber>
            <StyledText>Satisfied customers</StyledText>
          </StyledAdvantage>
        </StyledAdvantagesContainer>
      </StyledContainer>
    </StyledIntroductionSection>
  );
};

export default CompanyOverviewSection;
