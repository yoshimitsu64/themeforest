import styled from 'styled-components';
import Image from 'assets/images/02_img_10.jpg';

export const StyledNewSolutions = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[14]}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
`;

export const StyledImage = styled.div`
  height: inherit;
  content: url(${Image});
  margin-right: ${({ theme }) => theme.sizes[0]}px;
`;

export const StyledDescription = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[7]}px;
`;

export const StyledTitle = styled.div`
  width: inherit;
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
`;

export const StyledSubtitle = styled.div`
  width: inherit;
  margin-top: ${({ theme }) => theme.sizes[0]}px;
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[0].lineHeight}px;
`;
