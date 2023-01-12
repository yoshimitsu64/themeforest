import { useEffect, useState } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { useMediaQuery } from 'hooks/useMediaQuery';

export const useResponsiveContainer = (
  componentsArray: Array<AnyStyledComponent>
): AnyStyledComponent => {
  const [container, setContainer] = useState<AnyStyledComponent | null>(null);

  const { isMobile, isTablet, isDesktopOrTablet, isDesktop } = useMediaQuery();

  useEffect(() => {
    if (isDesktop) {
      setContainer(componentsArray[0]);
    } else if (isDesktopOrTablet) {
      setContainer(componentsArray[1]);
    } else if (isTablet) {
      setContainer(componentsArray[2]);
    } else if (isMobile) {
      setContainer(componentsArray[3]);
    }
  }, [isMobile, isTablet, isDesktopOrTablet, isDesktop]);

  return container!;
};
