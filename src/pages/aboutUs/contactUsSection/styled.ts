import styled from 'styled-components';

export const StyledContactUsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[17]}px;
  height: max-content;
  justify-content: space-between;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-content: baseline;
  width: ${({ theme }) => theme.sizes[0]}%;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
`;

export const StyledContactsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  & .contact {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContactTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.space[0]}px;
`;

export const StyledContactSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.bold[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.bold[0].lineHeight}px;
`;
