import styled from 'styled-components';

export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes[0] + 30}%;
`;

export const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }
`;

export const StyledContactTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.headLine.semiBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.semiBold[0].fontWeight};

  & svg {
    margin-right: ${({ theme }) => theme.space[1]}px;
  }
`;

export const StyledContactDescription = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.typography.paragraph.regular[1].size}px;
  font-weight: ${({ theme }) => theme.typography.paragraph.regular[0].fontWeight};
`;
