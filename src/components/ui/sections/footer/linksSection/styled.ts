import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from 'assets/images/logo/Logo.png';

export const StyledLinksSection = styled.section`
  display: flex;
  width: 1110px;
  position: relative;
  margin-top: ${({ theme }) => theme.sizes[0]}px;
  margin-bottom: ${({ theme }) => theme.sizes[0]}px;
  justify-content: center;
`;

export const StyledLinksSectionDesktopOrTablet = styled(StyledLinksSection)`
  width: max-content;
  flex-direction: column;
  align-self: center;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[5] - 15}px;
  margin-right: ${({ theme }) => theme.sizes[3]}px;
`;

export const StyledLogo = styled.div`
  content: url(${Logo});
  width: ${({ theme }) => theme.sizes[2]}px;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: space-between;
`;

export const StyledFooterLinksDesktopOrTablet = styled(StyledFooterLinks)`
  flex-direction: column;
`;

export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[2].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[2].lineHeight}px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const StyledSocialNetworksLinks = styled.div`
  display: flex;
  justify-content: space-between;

  & div:not(:last-child) {
    margin-right: 10px;
  }
`;

export const StyledQuickLinks = styled.div`
  display: flex;
  flex-direction: column;

  & a:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }

  & div:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }
`;

export const StyledQuickLinkTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.bold[2].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.bold[2].fontWeight};
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledQuickLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.paragraph.regular[2].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[2].fontWeight};
  line-height: ${({ theme }) => theme.typography.paragraph.regular[2].lineHeight}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey};
  max-width: 233px;
`;

export const StyledText = StyledQuickLink.withComponent('div');
