import { View } from 'react-native'
import tw from 'twrnc'
import Colors from '../../Colors'

const SectionDivider = () => <View style={tw`h-[1px] bg-[${ Colors.divider }] w-[95%] ml-auto`} />

export default SectionDivider