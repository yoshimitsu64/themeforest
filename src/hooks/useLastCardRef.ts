import { MutableRefObject, useCallback, useState } from 'react';

export const useLastCardRef = (
  observer: MutableRefObject<IntersectionObserver | undefined>
): readonly [(node: Element) => void, number] => {
  const [countOfCards, setCountOfCards] = useState(9);

  const lastCardRef = useCallback((node: Element): void => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCountOfCards((prev) => prev + 9);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return [lastCardRef, countOfCards] as const;
};
