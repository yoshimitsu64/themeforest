import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 1110px;
  align-items: center;
  align-content: space-between;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[0]}vw;
  height: max-content;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledText = styled.div`
  width: ${({ theme }) => theme.sizes[0]}%;
  font-size: 80px;
  font-weight: 800;
`;

export const StyledHighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
