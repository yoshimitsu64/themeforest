import styled from 'styled-components';
import Image1 from 'assets/images/homePage/img_11.jpg';

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
  width: ${({ theme }) => theme.sizes[0]}%;
  height: max-content;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:after {
    content: url(${Image1});
    overflow: hidden;
  }

  & > * {
    position: absolute;
    top: -10%;
    left: 55%;
  }
`;
