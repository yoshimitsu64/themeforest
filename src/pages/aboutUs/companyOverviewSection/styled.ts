import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[3]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1110px;
  height: max-content;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
`;

export const StyledAdvantagesContainer = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.space[5]}px;
  padding-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledAdvantage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  padding-left: ${({ theme }) => theme.space[9]}px;
  padding-right: ${({ theme }) => theme.space[9]}px;
`;

export const StyledNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.bold[0].fontWeight};
  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledDevider = styled.div`
  content: '';
  display: inline-block;
  height: 100px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.helperBlue3};
  margin-left: ${({ theme }) => theme.space[2]}px;
  margin-right: ${({ theme }) => theme.space[2]}px;
`;
