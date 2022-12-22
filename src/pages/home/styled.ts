import styled from 'styled-components';
import Image1 from 'assets/images/img_11.jpg';

export const StyledImage = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: url(${Image1});
  }

  & > * {
    position: absolute;
    top: -10%;
    left: 55%;
  }
`;
