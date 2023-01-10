import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  align-content: space-between;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.sizes[17]}px;
  height: max-content;
  padding-top: ${({ theme }) => theme.space[3]}px;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledContentMobile = styled(StyledContent)`
  flex-direction: column;
`;
