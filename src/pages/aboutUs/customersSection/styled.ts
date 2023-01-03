import { IImage } from 'pages/aboutUs/customersSection/types';
import styled from 'styled-components';

export const StyledCustomersSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[3]}px;
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

export const StyledTilte = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[0].lineHeight}px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLogo = styled.div<IImage>`
  content: url(${({ imageURL }) => imageURL});
`;
