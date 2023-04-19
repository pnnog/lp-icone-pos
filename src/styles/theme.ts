export default {
  grid: {
    container: '130rem',
    gutter: '9.6rem'
  },

  border: {
    radius: '0.4rem'
  },

  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    medium: 500,
    bold: 600,
    extraBold: 700,

    sizes: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.2rem'
    }
  },
  colors: {
    primary: '#0C4A6E',
    secondary: '#0284C7',
    lightBlue: '#0EA5E9',
    white: '#F8FAFC',
    gray: '#475569',
    darkGray: '#64748B',
    lightGray: '#78909C',
    black: '#334155',
    orange: '#F0632B'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const;
