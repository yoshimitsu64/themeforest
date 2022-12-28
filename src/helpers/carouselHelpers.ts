import { RefObject } from 'react';

export const moveCarouselItems =
  (direction: 'next' | 'previous' = 'next', ref: RefObject<HTMLDivElement>) =>
  () => {
    const width = ref.current!.clientWidth;
    ref.current!.scrollLeft =
      direction === 'next' ? ref.current!.scrollLeft + width : ref.current!.scrollLeft - width;
  };
