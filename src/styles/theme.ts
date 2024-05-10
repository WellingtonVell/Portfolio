export default {
  grid: {
    container: '120rem',
  },
  border: {
    radius: '0.6rem',
  },
  box: {
    shadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  },
  devices: {},
  font: {
    family: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    weight: {
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      xsmall: '1rem',
      small: '2rem',
      medium: '3rem',
      large: '4rem',
      xlarge: '5rem',
    },
  },
  colors: {
    background: '#d2e3ec',
    content: '#612F74',
    text: '#000000',
    red: '#ff0000',
  },
  spacings: {
    small: '2rem',
    medium: '2.8rem',
    large: '3.6rem',
  },
  layers: {},
  transition: {
    default: '0.4s ease-in-out',
    fast: '0.2s ease-in-out',
  },
} as const;
