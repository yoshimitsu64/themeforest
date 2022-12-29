import styled from 'styled-components';

export const StyledFaqsSection = styled.section`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1110px;
  padding-top: ${({ theme }) => theme.sizes[1]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;

  & .faq-card:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[3]}px;
  }
`;
