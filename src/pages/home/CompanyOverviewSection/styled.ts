import styled from 'styled-components';

interface ILogos {
  logo: any;
}

export const StyledCompanyExperience = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  padding-left: ${({ theme }) => theme.sizes[7]}px;
  padding-right: ${({ theme }) => theme.sizes[7]}px;
`;

export const StyledTitle = styled.div`
  width: max-content;
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledDescription = styled.div`
  display: flex;
  height: max-content;
  align-items: center;
`;

export const StyledBenefits = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${({ theme }) => theme.sizes[0] - 20}px;
`;

export const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: ${({ theme }) => theme.padding[2]}px;

  &:first-child {
    margin-bottom: ${({ theme }) => theme.sizes[0] - 40}px;
  }
`;

export const StyledCount = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[0].fontWeight};
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledText = styled.div`
  width: max-content;
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[1].lineHeight}px;
`;

export const StyledSubtitle = styled.div`
  width: ${({ theme }) => theme.sizes[10]}px;

  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[0].lineHeight}px;
`;

export const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled.div<ILogos>`
  content: url(${({ logo }) => logo});
`;
