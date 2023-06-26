// get the color scheme from iOS calendar app
const transparentnessMap:Record<string, string> = {
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

export const transparent = (transparentness: number, color: string) => color + transparentnessMap[transparentness];

const COLORS = {
  cta: {
    red: '#FF453A',
    green: '#35C989',
    blue: '#0A84FF',
    yellow: '#FFD60A',
  },
  text: {
    '000':'#FFFFFF',
    '100': '#DCDDDE',
    '200': '#B9BBBE',
    'green': '#72FFC2',
  },
  bg: {
    '000': '#000000',
    '100': '#202225',
    '200': '#292B2F',
    '300': '#36393F',
    '400': '#393C43',
    '500': '#4F545C',
    '600': '#5D6269'
  },
  brand: {
    primary: '#5865F2',
    secondary: '#949CF7',
    pressed: '#4752C4',
    tmp: transparent(0.9, '#5865F2')
  },
  gradient: {
    blueToPurple: ['#3F70DD', '#B377F3']
  }
}

export default COLORS;