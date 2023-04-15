import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from "@gorhom/bottom-sheet"
import { ForwardedRef, forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import IconButton from "../IconButton"
import AntDesign from "react-native-vector-icons/AntDesign"
import { RepeatMode } from "../../Types/CalendarItemTypes"
import { REPEAT_MODE } from "../../constants"

export interface RepeatModeSelectModalImperativeAPI
{
  present: () => void
  dismiss: () => void
}

const RepeatModeSelectModal = forwardRef((props, ref: ForwardedRef<RepeatModeSelectModalImperativeAPI>) =>
{
  const { color, itemInput, setItemInput } = useCreateScreenContext()
  const internalRef = useRef<BottomSheetModal>(null)
  const REPEAT_OPTIONS: RepeatMode[] = ["NO_REPEAT", "DAILY", "WEEKLY", "MONTHLY", "YEARLY"]
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

  const handleModeSelect = useCallback((mode: RepeatMode) =>
  {
    setItemInput({ ...itemInput, repeatMode: mode })
    internalRef.current?.close()
  }, [])


  return (
    <BottomSheetModal
      ref={internalRef}
      snapPoints={["60%"]}
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
          REPEAT_OPTIONS.map((option, i) => (
            <Pressable
              key={i}
              onPress={() => handleModeSelect(option)}
            >
              <View key={option} style={tw`flex-row my-2 items-center h-[32px]`}>
                <Text style={tw`text-[${ Colors.text.primary }] text-base mx-2`}>
                  {REPEAT_MODE[option]}
                </Text>
                {
                  itemInput.repeatMode == option &&
                    <View style={tw`flex-2`}>
                    <IconButton
                      Icon={AntDesign}
                      name="check"
                      color={Colors.label[color].text}
                      onPress={() => handleModeSelect(option)}
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

export default RepeatModeSelectModal