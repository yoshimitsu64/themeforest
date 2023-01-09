import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledPageDescription = styled.div`
  align-self: center;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[7]}px;
  text-align: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1110px;
  height: max-content;
`;
