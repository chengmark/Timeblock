import { ReactElement } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import Colors from '../../Colors'

interface SectionWrapperProps {
  children: ReactElement | ReactElement[]
  [x:string]:any
}

const SectionWrapper = ({ children, ...props }:SectionWrapperProps) => {
  return (
    <View
      style={tw`bg-[${Colors.neutral[800]}] flex-col m-2 p-2 rounded-[8px]`}
    >
      {children}
    </View>
  )
}

export default SectionWrapper