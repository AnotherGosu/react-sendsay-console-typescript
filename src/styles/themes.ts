export type ThemeType = typeof lightTheme;

export const lightTheme = {
  background: {
    100: '#ffffff',
    200: '#f6f6f6',
    300: '#f7f7f7',
  },
  border: {
    idle: '#cccccc',
    active: '#999999',
  },
  text: '#0d0d0d',
  error: '#cf2c00',
};

export const darkTheme: ThemeType = {
  background: {
    100: '#121212',
    200: '#282828',
    300: '#404040',
  },
  border: {
    idle: '#404040',
    active: '#999999',
  },
  text: '#ffffff',
  error: '#cf2c00',
};
