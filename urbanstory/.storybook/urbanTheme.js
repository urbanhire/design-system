import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  //appBg: '#fff',
  appContentBg: 'white',
  appBorderColor: '#c2c2c2',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Barlow", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#011148',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Urbanhire Design System',
  brandImage: 'https://winter-cdn.urbanhire.com/img/logo.svg',
});
