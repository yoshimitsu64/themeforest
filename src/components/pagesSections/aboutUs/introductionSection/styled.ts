import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: ${({ theme }) => theme.sizes[5]}px;
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.headLine.extraBold[0].size}px;
  font-weight: ${({ theme }) => theme.typography.headLine.extraBold[0].fontWeight};
`;
