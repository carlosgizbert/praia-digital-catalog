import { DefaultTheme } from "styled-components";

import * as V from "./primary/defaultValues";

const primary: DefaultTheme = {
  themeKey: "primary",
  margin: V.IMarginDefault,
  padding: V.IPaddingDefault,
  borderRadius: V.IBorderRadiusDefault,
  shadowLevel: V.IShadowLevelDefault,
  fontFamily: V.IFontFamilyDefault,
  fontSize: V.IFontSizeDefault,
  fontWeight: V.IFontWeightDefault,
  gridSpace: V.IGridSpace,
  colors: V.colors
};

export default primary;
