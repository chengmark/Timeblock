// get the color scheme from iOS calendar app


const Colors = {
  'bg':{
    'base':'#000000', // dark
    // 'primary':'#1F1C1C', // dark grey
    'primary':'#000000', // dark grey
    'secondary':'#242425' // grey
  },
  'font': {
    'primary':'#FFFFFF', // white
    'secondary':'#7C7C7B', // grey
    'holiday':'#B03F3A', // red
    'today':'#000000' // black
  },
  'event':{
    'blue':"#3D7DAF",
    'green':"#519E72"
  },
  'button':{
    'bg':'#232324',
    'text':'#FFFFFF',
    'active':'#3F4140', 
  },
  'black':'#000000',
  'white':'#FFFFFF',
  'red':'#FF453A',
  'orange':'#FF9F0A',
  'yellow':'#FFD60A',
  'green':'#32D74B',
  'teal':'#64D2FF',
  'blue':'#0A84FF',
  'indigo':'#5E5CE6',
  'purple':'#BF5AF2',
  'pink':'#FF2D55',
  'grey':{
    1:'#8E8E93',
    2:'#636366',
    3:'#48484A',
    4:'#3A3A3C',
    5:'#2C2C2E',
    6:'#1C1C1E',
  },
  'text':{
    'primary':'#FFFFFF',
    'secondary':'#EBEBF555',
  }


}
export default Colors

export const transparent = (transparentness:number, color: string) => color + Math.floor(transparentness * 255).toString()