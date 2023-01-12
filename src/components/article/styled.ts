import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  max-width: ${({ theme }) => theme.sizes[14]}px;
`;

export const StyledArticleDesktopOrTablet = styled(StyledArticle)`
  max-width: ${({ theme }) => theme.sizes[7]}px;
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledInfoBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[4]}px;
  column-gap: ${({ theme }) => theme.space[5]}px;
  min-width: ${({ theme }) => theme.sizes[2]}px;
`;

export const StyledInfo = styled(StyledInfoBlock)`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[1]}px;
`;

export const StyledFooterArticle = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.space[5]}px;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[5]}px;
`;

export const StyledFooterItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[1]}px;
`;

export const StyledArticleText = styled.div`
  & p,
  blockquote {
    padding-top: ${({ theme }) => theme.space[3]}px;
  }

  & blockquote {
    margin-left: ${({ theme }) => theme.space[7]}px;
    display: flex;

    &:before {
      content: '';
      width: ${({ theme }) => theme.space[0]}px;
      background-color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.space[3]}px;
    }
  }
`;
