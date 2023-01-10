import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IProps {
  color?: 'black' | 'white' | 'grey';
}

export const StyledBreadcrumbs = styled.div<IProps>`
  & a:first-child {
    font-size: ${({ theme }) => theme.typography.headLine.medium[0].size}px;
    color: ${({ theme }) => theme.colors.grey};
  }

  & a:first-child::after {
    content: '  |  ';
    color: ${({ theme }) => theme.colors.grey};
  }

  & a:last-child {
    color: ${({ theme, color }) => theme.colors[color!]};
    font-size: ${({ theme }) => theme.typography.headLine.semiBold[0].size}px;
    font-weight: ${({ theme }) => theme.typography.headLine.semiBold[0].fontWeight};
  }
`;

export const StyledLink = styled(Link)`
  height: inherit;
  text-decoration: none;
  color: ${({ theme, color }) => theme.colors[color!]};
`;
