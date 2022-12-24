import styled from 'styled-components';

export const StyledContactUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledContactUsTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.headLine.extraBold[1].fontWeight};
  margin-bottom: ${({ theme }) => theme.padding[5]}px;
`;

export const StyledContactUsSubtitle = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) =>
    theme.typography.paragraph.regular[1].fontWeight};
  line-height: ${({ theme }) =>
    theme.typography.paragraph.regular[1].lineHeight}px;
  color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.sizes[10]}px;
  margin-bottom: ${({ theme }) => theme.padding[5]}px;
`;
