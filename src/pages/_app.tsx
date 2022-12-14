import type { AppProps } from 'next/app'

import Theme from "@theme/index";
import GlobalStyle from "@theme/global.styles";
import { CartProvider } from 'src/data/context/Cart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <CartProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CartProvider>
    </Theme>
  )
}