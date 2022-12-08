export type IColors = {
  white: string;
  rebecca_purple: string;
  very_light_pink: string;
  dark_grey_blue: string;
  dark_blue_grey: string;
  pine_green: string;
  light_sky_blue: string;
  light_blue_grey: string;
  greyish_brown: string;
  error: string;
  success: string;
};

export type IGridSpace = {
  spacing_SM: string;
  spacing_MD: string;
  spacing_LG: string;
};

type ITitleSize = {
  large: string;
  medium: string;
};

type ICommonSize = {
  small: string;
  normal: string;
  medium: string;
  large: string;
};

export type IMargin = {
  size: ICommonSize;
};

export type IPadding = {
  size: ICommonSize;
};

export type IBorderRadius = {
  border_4: string;
  border_8: string;
};

export type IShadowLevel = {
  level_1: string;
};

export type IFontFamily = {
  primary: string;
};

export type IFontSize = {
  normal: ICommonSize;
  title: ITitleSize;
};

export type IFontWeight = {
  normal: string;
  bold: string;
};
