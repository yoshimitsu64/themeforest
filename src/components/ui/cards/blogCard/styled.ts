import styled from 'styled-components';

interface IImage {
  imageURL: string;
}

export const StyledBlogCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[6]}px;
`;

export const StyledBlogImage = styled.div<IImage>`
  content: url(${({ imageURL }) => imageURL});
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledBlogDate = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[2].fontWeight}px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.space[1]}px;
`;

export const StyledBlogName = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[0].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[1]}px;
`;

export const StyledBlogText = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[1].fontWeight}px;
  line-height: ${({ theme }) => theme.typography.paragraph.regular[1].lineHeight}px;
`;

export const StyledReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledReadMore = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.semiBold[0].fontWeight}px;
  margin-right: ${({ theme }) => theme.space[1]}px;
`;
