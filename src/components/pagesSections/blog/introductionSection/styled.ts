import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  margin-top: ${({ theme }) => theme.sizes[1]}px;
  margin-bottom: ${({ theme }) => theme.sizes[1]}px;
`;
