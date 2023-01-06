import useMediaQuery from 'hooks/useMediaQuery';

export const useCountOfCards = () => {
  const isTablet = useMediaQuery(1110);
  const isMobile = useMediaQuery(640);

  if (isMobile) {
    return 1;
  }
  if (isTablet) {
    return 2;
  }
  return 3;
};
