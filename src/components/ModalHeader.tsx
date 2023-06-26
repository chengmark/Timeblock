import { ReactElement } from 'react'
import { Dimensions } from 'react-native'
import tw from 'twrnc'
import Box from './Base/Box'
import Row from './Row'

interface ModalHeaderProps {
  LeftComponent?: () => ReactElement
  MidComponent?: () => ReactElement
  RightComponent?: () => ReactElement
}

const Padding = () => <Box style={tw`w-[24px]`}/>

const ModalHeader = ({LeftComponent, MidComponent, RightComponent}: ModalHeaderProps) => {
  return  (
    <Row justify='between' align='center' style={tw`w-[${Dimensions.get('window').width}px]`} p={2}>
      {LeftComponent ? <LeftComponent /> : <Padding />}
      {MidComponent ? <MidComponent /> : <Padding />}
      {RightComponent ? <RightComponent /> : <Padding />}
    </Row>
  )
}

export default ModalHeader