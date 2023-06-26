import React, { ReactElement } from 'react'
import { Dimensions } from 'react-native'
import tw from 'twrnc'
import COLORS from '../Colors'
import FlexBox from './Base/FlexBox'
import Col from './Col'
import ScrollCol from './ScrollCol'

interface ModalProps{
  children: ReactElement | ReactElement[];
}

const Modal = ({children}:ModalProps) => {
  return (
    <Col
      bg={COLORS.bg[100]}
      rounded={0}
      style={[
        // tw`max-h-[500px]`, // TODO adjust to screen height minus some offsets
      ]}
      p={[0, 0, 10, 0]}
      expand
    >
      {children}
    </Col>
  )
}

export default Modal