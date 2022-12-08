import { DefaultTheme } from "styled-components";
import { IColors } from "@theme/variants/primary/defaultTypes";

export const getColorValue = (theme: DefaultTheme, color: string) => {
  const colorKey = (c: string) => c as keyof IColors;
  return theme.colors[colorKey(color)] || color;
};
