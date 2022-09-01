export interface ColorTheme {
  black: string;
  lightblack: string;
  sblack: string;
  darkblack: string;
  white: string;
  pink: string;
  bgColor: string;
  lightgray: string;
  gray: string;
  light: string;
  PlatinumGray: string;
  toneblack: string;
  toneblack2: string;
  fontColor: string;
  baba: string;
  shadegray: string;
  shadegray1: string;
  paynesgray: string;
  dark: string;
  gray2: string;
  shadepink: string;
  shade1: string;
  Sandstone: string;
  gray3: string;
  csilver: string;
  Tgray: string;
  appsilver: string;
  bm: string;
  darkgray: string;
  silver: string;
  appgray: string;
  gray1: string;
  Tundora: string;
  brightgray: string;
  soniksilver: string;
  green: string;
  pigpink: string;
  razzmatazz: string;
  Strawberry: string;
  borderColor: string;
  backgroundColor: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
}
