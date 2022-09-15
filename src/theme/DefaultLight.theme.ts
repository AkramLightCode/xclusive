import {ColorTheme, SpacingTheme, Theme} from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  borderColor: '#EDEDED',
  backgroundColor: '#ffffff',
  black: '#000000',
  lightblack: '#3D373A',
  pink: '#FC0270',
  bgColor: '#F4F4F4',
  white: '#fff',
  light: '#B9B0B4',
  toneblack: '#1D1D1D',
  darkblack: '#310436',
  bm: '#ABA4A7',
  sblack: '#303030',
  PlatinumGray: '#797979',
  baba: '#BABABA',
  csilver: '#CCCCCC',
  fontColor: '#847D80',
  Tgray: '#888888',
  appsilver: '#C5C5C5',
  toneblack2: '#232323',
  gray1: '#808080',
  lightgray: '#8E878A',
  Tundora: '#423F40',
  shadegray: '#8A8A8A',
  green: '#329C0C',
  gray: '#656565',
  darkgray: '#464646',
  borderColor2: '#8C7F85',






  
  shadegray1: '#8C7F85',
  paynesgray: '#44444A',
  dark: '#45373d',
  gray2: '#AEAEAE',
  shadepink: '#A5939B',
  shade1: '#83727A',
  Sandstone: '#6F6569',
  gray3: '#827A7D',
  silver: '#BEBEBE',
  appgray: '#7E7E7E',
  brightgray: '#EAEAEA ',
  soniksilver: '#757575',
  pigpink: '#FFD9EA',
  razzmatazz: '#EC1E79',
  Strawberry: '#FE2283',
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
