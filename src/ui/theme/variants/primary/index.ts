import { DefaultTheme } from "styled-components";

import primary from "../primary";

import * as T from "./defaultTypes";

declare module "styled-components" {
  export interface DefaultTheme {
    themeKey: string;
    colors: T.IColors;
    margin: T.IMargin;
    padding: T.IPadding;
    borderRadius: T.IBorderRadius;
    shadowLevel: T.IShadowLevel;
    fontFamily: T.IFontFamily;
    fontSize: T.IFontSize;
    fontWeight: T.IFontWeight;
    gridSpace: T.IGridSpace;
  }
}

type ThemesOptions = {
  [key: string]: DefaultTheme;
};

const themes: ThemesOptions = {
  primary
};

export default themes;
