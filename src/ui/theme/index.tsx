import { ThemeProvider } from "styled-components";

import themes from "./styles/primary";

function Theme({ children }: any) {
  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
}

export default Theme;
