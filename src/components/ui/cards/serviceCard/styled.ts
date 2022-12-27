import styled from 'styled-components';

interface IProps {
  imageURL: string;
}

export const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[6]}px;
  box-shadow: ${({ theme }) => theme.shadows.shadowCard3.boxShadow};
  scroll-margin: inherit;
  width: ${({ theme }) => theme.sizes[0] - 3}%;
  margin-bottom: ${({ theme }) => theme.space[7]}px;
`;
export const StyledServiceCardLogo = styled.div<IProps>`
  width: max-content;
  content: url(${({ imageURL }) => imageURL});
`;

export const StyledServiceCardTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[0].fontWeight};
  margin-top: ${({ theme }) => theme.space[7]}px;
  display: flex;
  flex-direction: column;
`;

export const StyledServiceCardDescription = styled.div`
  margin-top: ${({ theme }) => theme.space[2]}px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledReadMore = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.semiBold[0].fontWeight};
  margin-right: ${({ theme }) => theme.space[1]}px;
`;
