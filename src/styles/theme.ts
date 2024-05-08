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
      small: '2.2rem',
      medium: '2.8rem',
      large: '3.6rem',
    },
  },
  colors: {
    background: '#d2e3ec',
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
