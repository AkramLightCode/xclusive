import {ColorTheme, SpacingTheme, Theme} from './Theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  borderColor: '#EDEDED',
  backgroundColor: '#000000',
  black: '#ffffff',
  lightblack: '#FFFFF7',
  pink: '#FC0270',
  bgColor: '#232323',
  fontColor: '#F8F6F0',
  white: '#000000',
  light: '#FAF0DD',
  toneblack: '#FDEEF4',
  darkblack: '#E1D9D1',
  bm: '#FAF0DD',
  sblack: '#FAF0DD',
  PlatinumGray: '#E5E4E2',
  baba: '#FAF0DD',
  csilver: '#FAF0DD',
  Tgray: '#FAF0DD',
  appsilver: '#CECECE',
  toneblack2: '#FAF0DD',
  gray1: '#D3D3D3',
  lightgray: '#D1D0CE',
  Tundora: '#FDEEF4',
  shadegray: '#D1D0CE',
  green: '#329C0C',
  gray: '#FAF0DD',
  darkgray: '#FAF0DD',
  borderColor2: '#EDEDED',








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

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
};
