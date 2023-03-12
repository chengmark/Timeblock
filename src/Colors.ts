// get the color scheme from iOS calendar app
const transparentnessMap = {
  "0.1":"25", // 0.1 * 255 = 25
  "0.2":"33", // 0.2 * 255 = 51
  "0.3":"4c", // 0.3 * 255 = 76
  "0.4":"66", // 0.4 * 255 = 102
  "0.5":"7f", // 0.5 * 255 = 127
  "0.6":"99", // 0.6 * 255 = 153
  "0.7":"b2", // 0.7 * 255 = 178
  "0.8":"cc", // 0.8 * 255 = 204
  "0.9":"e5", // 0.9 * 255 = 229
  "1":"ff" // 1 * 255 = 255
}

const LABEL_BG_TRANSPARENTNESS = "0.2"

const Colors = {
  "bg":{
    "primary":"#191919",
    "secondary":"#202020",
    "withTransparentness": "#202020"+transparentnessMap[LABEL_BG_TRANSPARENTNESS]
  },
  "divider":"#2f2f2f", // or underlines
  "text":{
    "primary":"#d4d4d4",
    "secondary":"#7f7f7f"
  },
  "feedback":{
    "info":"#26A8FF",
    "success":"#1EE46D",
    "warning":"#FDE111",
    "danger":"#F83535"
  },
  "neutral":{
    "100":"#FFFFFF", // lightest
    "200":"#d4d4d4",
    "300":"#868686",
    "400":"#7f7f7f",
    "500":"#2f2f2f",
    "600":"#2f2f2f",
    "700":"#252525",
    "800":"#202020",
    "900":"#191919",
    "1000":"#000000" // darkest
  },
  "purple":"#a782c3",
  "label":{
    "blue":{
      "text":"#3281b0",
      "bg":"#3281b0"+transparentnessMap[LABEL_BG_TRANSPARENTNESS],
    },
    "red":{
      "text":"#983f3c",
      "bg":"#983f3c"+transparentnessMap[LABEL_BG_TRANSPARENTNESS],
    },
    "green":{
      "text":"#319a71",
      "bg":"#319a71"+transparentnessMap[LABEL_BG_TRANSPARENTNESS],
    }
  }
}

export type LabelColors = "blue" | "red" | "green"

export const transparent = (transparentness:number, color: string) => color + Math.floor(transparentness * 255).toString()

export default Colors