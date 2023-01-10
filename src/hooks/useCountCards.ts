import { useMediaQuery } from 'hooks/useMediaQuery';

export const useCountOfCards = () => {
  const { isMobile, isTablet } = useMediaQuery();

  if (isMobile) {
    return 1;
  }
  if (isTablet) {
    return 2;
  }
  return 3;
};
