import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from "@gorhom/bottom-sheet"
import { ForwardedRef, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import Colors, { LabelColors } from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import IconButton from "../IconButton"
import AntDesign from "react-native-vector-icons/AntDesign"
import Tag from "../Tag"
import { TAG_COLOR } from "../../constants"

export interface TagSelectModalImperativeAPI
{
  present: () => void
  dismiss: () => void
}

const TagSelectModal = forwardRef((props, ref: ForwardedRef<TagSelectModalImperativeAPI>) =>
{
  const { color, setColor } = useCreateScreenContext()
  const internalRef = useRef<BottomSheetModal>(null)
  const COLOR_OPTIONS: LabelColors[] = ["blue", "green", "red"]
  useImperativeHandle(
    ref,
    () => ({
      present: () => internalRef.current?.present(),
      dismiss: () => internalRef.current?.close(),
    }),
    []
  );

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} pressBehavior="close" appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  );

  const handleTagSelect = useCallback((color: LabelColors) =>
  {
    setColor(color)
    internalRef.current?.close()
  }, [])


  return (
    <BottomSheetModal
      ref={internalRef}
      snapPoints={["85%"]}
      backdropComponent={renderBackdrop}
      index={0}
      style={tw`bg-[${ Colors.bg.primary }]`}
      backgroundStyle={tw`bg-[${ Colors.bg.primary }]`}
      handleStyle={tw`bg-[${ Colors.bg.primary }]`}
      handleIndicatorStyle={tw`bg-[${ Colors.text.primary }]`}

    >
      <View
        style={tw`flex-col justify-start flex-1 bg-[${ Colors.bg.primary }] p-4`}
      >
        <Text style={tw`text-xl text-[${Colors.text.primary}] mb-4`}>
          選擇標籤顏色
        </Text>
        {
          COLOR_OPTIONS.map((option, i) => (
            <Pressable
              key={i}
              onPress={() => handleTagSelect(option)}
            >
              <View key={option} style={tw`flex-row my-2`}>
                <View style={tw`flex-1 flex-row items-center`}>
                  <View style={tw`rounded-[10px] bg-[${Colors.label[option].text}] w-[8px] h-[24px]`}/>
                  <Text style={tw`text-[${Colors.text.primary}] text-base mx-2`}>
                    {TAG_COLOR[option]}
                  </Text>
                </View>
                {
                  option == color && 
                  <View style={tw`flex-2`}>
                    <IconButton
                      Icon={AntDesign}
                      name="check"
                      color={Colors.label[option].text}
                      onPress={() => handleTagSelect(option)}
                      style={tw`ml-auto`}
                    />
                  </View>
                }
              </View>
            </Pressable>
          ))
        }
      </View>
    </BottomSheetModal>
  )
})

export default TagSelectModal