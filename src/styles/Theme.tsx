import {ThemeProvider} from 'styled-components';
import {useAppSelector} from 'store';
import {lightTheme, darkTheme} from 'styles/themes';
import {GlobalStyle} from 'styles/globalStyles';

export default function Theme({children}: {children: React.ReactNode}) {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
