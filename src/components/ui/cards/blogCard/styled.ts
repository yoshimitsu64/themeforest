import styled from 'styled-components';
import Image from 'assets/images/img_8.png';

export const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBlogImage = styled.div`
  content: url(${Image});
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  margin-bottom: ${({ theme }) => theme.padding[3]}px;
`;

export const StyledBlogDate = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[2].fontWeight}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.padding[1]}px;
`;

export const StyledBlogName = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[0].fontWeight};
  margin-bottom: ${({ theme }) => theme.padding[1]}px;
`;

export const StyledBlogText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[1].fontWeight}px;
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[1].lineHeight}px;
`;

export const StyledReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledReadMore = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.semiBold[0].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.semiBold[0].fontWeight}px;
  margin-right: ${({ theme }) => theme.padding[1]}px;
`;
