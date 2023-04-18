// get the color scheme from iOS calendar app
const transparentnessMap = {
  '0.1': '25', // 0.1 * 255 = 25
  '0.2': '33', // 0.2 * 255 = 51
  '0.3': '4c', // 0.3 * 255 = 76
  '0.4': '66', // 0.4 * 255 = 102
  '0.5': '7f', // 0.5 * 255 = 127
  '0.6': '99', // 0.6 * 255 = 153
  '0.7': 'b2', // 0.7 * 255 = 178
  '0.8': 'cc', // 0.8 * 255 = 204
  '0.9': 'e5', // 0.9 * 255 = 229
  '1': 'ff', // 1 * 255 = 255
};

const LABEL_BG_TRANSPARENTNESS = '0.2';

const COLORS = {
  blue: '#0A84FF',
  brown: '#AC8E68',
  cyan: '#64D2FF',
  green: '#30D158',
  indigo: '#5E5CE6',
  mint: '#66D4CF',
  orange: '#FF9F0A',
  pink: '#FF375F',
  purple: '#BF5AF2',
  red: '#FF453A',
  teal: '#40C8E0',
  yellow: '#FFD60A',
  grey: {
    100: '#8E8E93',
    200: '#636366',
    300: '#48484A',
    400: '#3A3A3C',
    500: '#2C2C2E',
    600: '#1C1C1E',
  },
  label: {
    100: '#FFFFFF',
    200: '#C8C8C8',
    300: '#989898',
  },
  fill: "#CECED1",
  placeholder: '#F8F8FC',
  background: {
    100: '#000000',
    200: '#1C1C1E',
    300: '#2C2C2E',
    400: '#3C3C3E',
  },
  separator: '#98989B',
  opaqueSeparator: '#38383A',
  link: '#0B84FF',
};

export default COLORS;

export const transparent = (transparentness: number, color: string) => color + Math.floor(transparentness * 255).toString();
