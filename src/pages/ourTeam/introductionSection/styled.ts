import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-top: ${({ theme }) => theme.space[7]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1110px;

  & div:first-child {
    margin-bottom: ${({ theme }) => theme.sizes[2]}px;
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;
