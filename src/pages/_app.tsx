import type { AppProps } from 'next/app'

import Theme from "@theme/index";
import GlobalStyle from "@theme/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  </>
}