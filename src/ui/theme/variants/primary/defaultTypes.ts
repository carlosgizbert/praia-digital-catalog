export type IColors = {
  brand_primary_00: string;
  brand_primary_10: string;
  brand_secondary_00: string;
  brand_secondary_10: string;
  dark_00: string;
  dark_10: string;
  grey_00: string;
  grey_10: string;
  grey_20: string;
  grey_30: string;
  blue_00: string;
  blue_10: string;
  danger_00: string;
  danger_10: string;
  success_00: string;
  success_10: string;
  white: string;
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
  level_2: string;
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
