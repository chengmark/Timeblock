import { ScrollView } from "react-native"
import { BoxProps, boxStyle } from "./Box"

import tw from 'twrnc'
import { forwardRef, ReactElement, Ref, useEffect, useRef } from "react"

const ScrollBox = forwardRef(({children, ...otherProps}:BoxProps, ref: Ref<ScrollView>) => {
  return (
    <ScrollView
      ref={ref}
      contentContainerStyle={[boxStyle(otherProps), tw`flex-col`]}
      bounces={false}
    >
      {children}
    </ScrollView>
  )
})

export default ScrollBox