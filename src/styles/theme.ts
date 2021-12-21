import { createTheme, responsiveFontSizes } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME ) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#4f809e',
        light: '#ef9e4c',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#4f809e',
        paper: '#175666',
      },
    },
  });
  theme = responsiveFontSizes(theme);
  return theme;
};