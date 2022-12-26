import { RefObject } from 'react';

export const moveCarouselItems =
  (direction: 'next' | 'previous' = 'next', ref: RefObject<HTMLDivElement>) =>
  () => {
    const width = ref.current!.clientWidth;
    if (ref.current!.scrollLeft + width >= ref.current!.scrollWidth) {
      console.log(ref.current!.scrollLeft);
    }
    console.log(ref.current!.scrollLeft);
    ref.current!.scrollLeft = Math.ceil(
      direction === 'next'
        ? Math.ceil(ref.current!.scrollLeft) + width
        : Math.ceil(ref.current!.scrollLeft) - width
    );
  };
