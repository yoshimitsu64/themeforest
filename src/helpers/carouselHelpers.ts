import { RefObject } from 'react';

export const moveCarouselItems =
  (ref: RefObject<HTMLDivElement>, direction: 'next' | 'previous' = 'next') =>
  () => {
    const width = ref.current!.clientWidth;
    ref.current!.scrollLeft =
      direction === 'next' ? ref.current!.scrollLeft + width : ref.current!.scrollLeft - width;
  };
