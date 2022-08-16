import { CssBaseline, ThemeProvider } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    background: {
      default: "#0052cc",
    },
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const MatxTheme = ({ children }) => {
  const { settings } = useSettings();
  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MatxTheme;
