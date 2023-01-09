import styled from 'styled-components';

export const StyledContactUsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ theme }) => theme.sizes[5]}px;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;
