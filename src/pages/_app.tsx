import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Get A Pokémon!</title>
        <link rel="shortcut icon" href="/img/pokeball.png" />
        <link rel="apple-touch-icon" href="/img/pokeball.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Let a Pokémon choose you this time!"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
