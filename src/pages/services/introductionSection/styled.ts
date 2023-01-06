import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[3]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  height: max-content;
`;
export const StyledPageDescription = styled.div`
  align-self: center;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.space[7]}px;
  text-align: center;
`;
