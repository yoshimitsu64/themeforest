import styled from 'styled-components';

import Image from 'assets/images/solutions/image1.png';

export const StyledAdvantagesSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledImage = styled.div`
  width: 50%;
  height: 100%;
  content: url(${Image});
`;
export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[9]}px;

  & svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[0] - 10}%;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.space[6]}px;
`;

export const StyledAdvatageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledAdvantage = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.space[3]}px;
  }
`;

export const StyledText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
  color: ${({ theme }) => theme.colors.grey};
`;