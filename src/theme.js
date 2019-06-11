import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// Created in case we need to modify the default theme from material-ui
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#efe33c',
      dark: '#ffd230'
    },
    secondary: {
      main: '#b5ef8a',
      dark: '#4ed216'
    },
    error: {
      main: '#e1504d'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        minHeight: 48
      },
      contained: {
        boxShadow: 'none'
      }
    },
    MuiFab: {
      root: {
        textTransform: 'none',
        minHeight: 48,
        boxShadow: 'none'
      }
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
});

const CustomThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const COLORS = {
  CONTRAST: '#164b77'
};

export { theme, CustomThemeProvider, COLORS };
