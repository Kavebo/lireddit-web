import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';

import theme from '../theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
