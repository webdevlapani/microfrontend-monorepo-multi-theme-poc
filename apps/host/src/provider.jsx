import { AuthProvider, theme, useAuth } from '@azaVista/shared';
import { createTheme } from '@mui/material/styles';

import { ThemeProvider } from '@mui/material/styles';
import Shell from '@azaVista/shell';

function Provider({ children }) {
  const { theme: apiTheme } = useAuth();
  const finalTheme = { ...theme, ...apiTheme.theme };
  console.log('apiThemeapiThemeapiTheme', apiTheme, theme, finalTheme);

  return (
    <ThemeProvider theme={createTheme(finalTheme)}>{children}</ThemeProvider>
  );
}

export default Provider;
