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
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;
  width: 1110px;
  height: 1680px;

  & > * {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }

  & .member-card:nth-child(1) {
    margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  }

  & .member-card:nth-child(7) {
    margin-top: ${({ theme }) => theme.sizes[1] + 20}px;
  }
`;
