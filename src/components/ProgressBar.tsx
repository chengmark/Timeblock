import { View } from 'react-native'
import tw from 'twrnc'

interface ProgressBarProps {
  bgColor: string
  progressColor: string
  progress: number
  radius?: number
}

const ProgressBar = ({bgColor, progressColor, progress, radius=15}:ProgressBarProps) => {
  return (
    <View
      style={[
        tw`flex-row flex-1`,
        tw`w-full`,
        tw`h-[6px]`,
        tw`bg-[${bgColor}]`,
        tw`rounded-[${radius}]`,
      ]}
    >
      <View
        style={[
          tw`h-[100%]`,
          tw`bg-[${progressColor}]`,
          tw`w-[${progress}%]`,
          tw`rounded-[${radius}]`,
        ]}
      />
    </View>
  )
}

export default ProgressBar