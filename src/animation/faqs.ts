import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    max-height: 70px;
  }
  to {
    max-height: 200px;
  }
`;

export const fadeOut = keyframes`
  from {
    max-height: 200px;
  }
  to {
    max-height: 70px;
  }
`;
