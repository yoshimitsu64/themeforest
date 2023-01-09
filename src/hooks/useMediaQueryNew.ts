import { useCallback, useEffect, useReducer, useState } from 'react';

import { theme } from 'constants/theme';

// eslint-disable-next-line no-shadow
enum ActionsTypes {
  IS_MOBILE = 'IS_MOBILE',
  IS_TABLET = 'IS_TABLET',
  IS_DESKTOP_OR_TABLET = 'IS_DESKTOP_OR_TABLET',
  IS_DESKTOP = 'IS_DESKTOP',
}

interface IInitialState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktopOrTablet: boolean;
  isDesktop: boolean;
}

interface IAction {
  type: ActionsTypes;
}

const initialState = {
  isMobile: false,
  isTablet: false,
  isDesktopOrTablet: false,
  isDesktop: false,
};

const reducer = (state: IInitialState, action: IAction) => {
  switch (action.type) {
    case ActionsTypes.IS_MOBILE: {
      return {
        ...initialState,
        isMobile: true,
      };
    }
    case ActionsTypes.IS_TABLET: {
      return {
        ...initialState,
        isTablet: true,
      };
    }
    case ActionsTypes.IS_DESKTOP_OR_TABLET: {
      return {
        ...initialState,
        isDesktopOrTablet: true,
      };
    }
    case ActionsTypes.IS_DESKTOP: {
      return {
        ...initialState,
        isDesktop: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const useMediaQueryNew = () => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const resizeHandler = useCallback(() => {
    const currentWidth = window.innerWidth;
    if (currentWidth < theme.breakPoints.mobile) {
      dispatch({ type: ActionsTypes.IS_MOBILE });
    } else if (currentWidth < theme.breakPoints.tablet) {
      dispatch({ type: ActionsTypes.IS_TABLET });
    } else if (currentWidth < theme.breakPoints.desktopOrLaptop) {
      dispatch({ type: ActionsTypes.IS_DESKTOP_OR_TABLET });
    } else if (currentWidth <= theme.breakPoints.desktop) {
      dispatch({ type: ActionsTypes.IS_DESKTOP });
    }
    setWindowWidth(currentWidth);
  }, [windowWidth]);

  useEffect(() => {
    resizeHandler();
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, [windowWidth]);

  return state;
};
