import styled from 'styled-components';

export const StyledIntroductionSection = styled.section`
  display: flex;
  width: ${({ theme }) => theme.sizes[1]}%;
  padding-top: ${({ theme }) => theme.space[7]}px;
  padding-bottom: ${({ theme }) => theme.sizes[1]}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.sizes[1]}px;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[17]}px;

  & div:first-child {
    margin-bottom: ${({ theme }) => theme.sizes[2]}px;
  }
`;

export const StyledIntroductionSectionMobile = styled(StyledIntroductionSection)`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: unset;
  padding-bottom: unset;
  margin-bottom: unset;
`;

export const StyledContainerMobile = styled(StyledContainer)`
  width: ${({ theme }) => theme.sizes[1]}%;
  & div:first-child {
    margin-bottom: unset;
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledDescriptionMobile = styled(StyledDescription)`
  flex-direction: column;
  align-items: center;
  justify-content: unset;
  height: min-content;
  margin: ${({ theme }) => theme.space[1]}px;
  width: ${({ theme }) => theme.sizes[1]}%;
`;

export const StyledImage = styled.img`
  width: ${({ theme }) => theme.sizes[1]}%;
  height: ${({ theme }) => theme.sizes[1]}%; ;
`;
