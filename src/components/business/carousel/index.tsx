import { forwardRef } from 'react';

import { StyledCarousel } from './styled';

interface IProps {
  children: JSX.Element[];
}

const Carousel = forwardRef<HTMLDivElement, IProps>(({ children }, forwardedRef) => {
  return (
    <StyledCarousel className="carousel" ref={forwardedRef}>
      {children}
    </StyledCarousel>
  );
});

export default Carousel;
