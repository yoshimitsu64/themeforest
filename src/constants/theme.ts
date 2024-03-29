export const theme = {
  colors: {
    primary: '#185CFF',
    secondary: '#002B4E',
    tertiary: '#F0F9FF',
    black: '#292D33',
    grey: '#9497A1',
    background: '#F1F6FA',
    error: '#C14040',
    helperBlue1: '#194060',
    helperBlue2: '#607D94',
    helperBlue3: '#C9DCEC',
    white: '#FFFFFF',
    lightTertiary: '#467DFF',
  },
  breakPoints: {
    mobile: 480,
    tablet: 768,
    desktopOrLaptop: 1110,
    desktop: 1920,
  },
  space: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 70, 90, 120],
  sizes: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 820, 1110],
  borders: {
    borderRadius: [5, 10, 15, 20, 25, 30],
    border: ['1px solid white', '2px solid black'],
  },
  fonts: [6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54],
  buttons: {
    primary: {
      color: '#FFFFFF',
      backgroundColor: '#185CFF',
      hover: '#467DFF',
    },
    disabled: {
      backgroundColor: '#9497A1',
      color: '#FFFFFF',
    },
  },
  typography: {
    headLine: {
      extraBold: [
        {
          fontWeight: 800,
          size: 46,
          lineHeight: 60,
        },
        {
          fontWeight: 800,
          size: 38,
          lineHeight: 56,
        },
        {
          fontWeight: 800,
          size: 30,
          lineHeight: 40,
        },
        {
          fontWeight: 800,
          size: 80,
          lineHeight: 88,
        },
      ],
      bold: [
        {
          fontWeight: 700,
          size: 22,
          lineHeight: 33,
        },
        {
          fontWeight: 700,
          size: 20,
          lineHeight: 30,
        },
        {
          fontWeight: 700,
          size: 16,
          lineHeight: 24,
        },
      ],
      semiBold: [
        {
          fontWeight: 600,
          size: 14,
          lineHeight: 24,
        },
      ],
      medium: [
        {
          fontWeight: 500,
          size: 14,
          lineHeight: 24,
        },
      ],
    },
    paragraph: {
      regular: [
        {
          fontWeight: 400,
          size: 20,
          lineHeight: 33,
        },
        {
          fontWeight: 400,
          size: 16,
          lineHeight: 28,
        },
        {
          fontWeight: 400,
          size: 14,
          lineHeight: 24,
        },
      ],
      bold: [
        {
          fontWeight: 700,
          size: 16,
          lineHeight: 28,
        },
      ],
      semiBold: [
        {
          fontWeight: 600,
          size: 14,
          lineHeight: 24,
        },
      ],
    },
  },
  shadows: {
    shadowCard3: {
      background: '#FFFFFF',
      boxShadow: '0px 4px 12px #0c44cc1a',
      borderRadius: 6,
    },
  },
  emailTextFields: {
    error: {
      backgroundColor: '#F6E2E2',
      color: '#C14040',
      caretColor: '#C14040',
    },
    enabled: {
      backgroundColor: '#C9DCEC',
      color: '#292D33',
      caretColor: '#185CFF',
    },
    disabled: {
      backgroundColor: '#ECEFF2',
      color: '#B4B6BD',
    },
    hovered: {
      backgroundColor: '#ECEFF2',
      color: '#9497A1',
    },
    focused: {
      backgroundColor: '#ECEFF2',
      color: '#292D33',
      caretColor: '#185CFF',
    },
  },
};
