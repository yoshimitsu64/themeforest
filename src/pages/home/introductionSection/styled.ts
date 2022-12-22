import styled from 'styled-components';
import Image1 from 'assets/images/img_11.jpg';

export const StyledIntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[1]}%;
  justify-content: center;
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
