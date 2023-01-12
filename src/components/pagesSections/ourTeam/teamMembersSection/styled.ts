import styled from 'styled-components';

export const StyledTeamMembersSection = styled.section`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  columns: 3;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  height: max-content;
  column-gap: ${({ theme }) => theme.space[2]}px;

  & > * {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;

export const StyledContainerMobile = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
`;
