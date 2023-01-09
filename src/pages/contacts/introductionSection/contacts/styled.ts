import styled from 'styled-components';

export const StyledContacts = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes[0]}%;
  margin-bottom: ${({ theme }) => theme.space[12]}px;
  margin-top: ${({ theme }) => theme.space[7]}px;
`;

export const StyledContactsMobile = styled(StyledContacts)`
  margin-top: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[9]}px;
  row-gap: ${({ theme }) => theme.space[1]}px;
  flex-direction: column;
`;

export const StyledContactCard = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-bottom: ${({ theme }) => theme.space[1]}px;
  }
`;

export const StyledContactHeader = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: ${({ theme }) => theme.space[1]}px;
  }
`;
