import React from 'react'
import { AppProps } from 'next/app'
// Styles
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import useDefaultTheme, { GlobalStyle } from '../theme'
import { LanguageContextProvider } from '../contexts'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const theme = useDefaultTheme()
  
  return (
    <LanguageContextProvider>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle {...theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageContextProvider>
  )
}

export default App
