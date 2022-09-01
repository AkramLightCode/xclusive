import {ColorTheme, SpacingTheme, Theme} from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  black: '#000000',
  lightblack: '#3D373A',
  sblack: '#303030',
  darkblack: '#310436',
  white: '#fff',
  pink: '#FC0270',
  bgColor: '#F4F4F4',
  lightgray: '#8E878A',
  gray: '#656565',
  light: '#B9B0B4',
  PlatinumGray: '#797979',
  toneblack: '#1D1D1D',
  toneblack2: '#232323',
  fontColor: '#847D80',
  baba: '#BABABA',
  shadegray: '#8A8A8A ',
  shadegray1: '#8C7F85',
  paynesgray: '#44444A',
  dark: '#45373d',
  gray2: '#AEAEAE',
  shadepink: '#A5939B',
  shade1: '#83727A',
  Sandstone: '#6F6569',
  gray3: '#827A7D',
  csilver: '#CCCCCC',
  Tgray: '#888888',
  appsilver: '#C5C5C5 ',
  bm: '#ABA4A7',
  darkgray: '#464646',
  silver: '#BEBEBE',
  appgray: '#7E7E7E',
  gray1: '#808080',
  Tundora: '#423F40 ',
  brightgray: '#EAEAEA ',
  soniksilver: '#757575',
  green: '#329C0C',
  pigpink: '#FFD9EA',
  razzmatazz: '#EC1E79',
  Strawberry: '#FE2283',
  borderColor: '#EDEDED',
  backgroundColor: '#ffffff',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
};
