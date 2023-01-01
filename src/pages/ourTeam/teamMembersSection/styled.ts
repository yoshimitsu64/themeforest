import styled from 'styled-components';

export const StyledTeamMembersSection = styled.section`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  columns: 3;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1110px;
  height: max-content;

  & > * {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;
