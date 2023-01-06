import styled from 'styled-components';

export const StyledDescription = styled.section<{ isMobile: boolean }>`
  display: flex;
  justify-content: center;
  width: ${({ theme }) => theme.sizes[1]}%;
  margin-top: 70px;
  margin-bottom: 70px;
  ${({ isMobile }) => {
    if (isMobile) {
      return {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'column',
      };
    }
  }};

  & > *:first-child {
    margin-right: 30px;
  }
`;
