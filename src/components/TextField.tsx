import React, { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Row from './Row'

import tw from 'twrnc'
import COLORS from '../Colors'
import { FONT_SIZE } from '../constants'

export interface TextFieldRef {
  focus: () => void;
  blur: () => void;
  clear: () => void;
  value?: string;
}

interface TextFieldProps {
  value?: string
  placeholder?: string
  placeholderColor?: string
  textColor?: string
  textSize?: keyof typeof FONT_SIZE
  bgColor?: string
  height?: number
  selectionColor?:string
  ContainedButton?: React.ComponentType
  capitalValue?: boolean // capitalize the value
}

const TextField = forwardRef(({
  placeholder,
  placeholderColor,
  textColor,
  textSize='l',
  bgColor = COLORS.bg['100'],
  height = 48,
  selectionColor = COLORS.text['000'],
  ContainedButton
}:TextFieldProps, ref) => {
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = useState('')

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    clear: () => {
      inputRef.current?.clear();
    },
    get value() {
      return value;
    },
  }))

  return (
    <Row
      p={[0, 1.25, 0, 1.25]}
      align='center'
      rounded={1}
      style={[
        tw`h-[${height}px]`,
        tw`w-full`,
        tw`bg-[${bgColor}]`
      ]}
    >
      <TextInput
        ref={inputRef}
        style={[
          tw`flex-1 p-0 ml-2`,
          tw`text-[${FONT_SIZE[textSize]}px]`,
          tw`text-[${textColor as string}]`,
          {alignSelf: 'center'},
        ]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        selectionColor={selectionColor}
        onChangeText={text => setValue(text)}
      />
      <>
        {ContainedButton && <ContainedButton />}
      </>
    </Row>
  )
})

export default TextField