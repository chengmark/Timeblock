import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from "@gorhom/bottom-sheet"
import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useRef } from "react"
import { View } from "react-native"
import tw from "twrnc"
import Colors from "../../Colors"
import { useCreateScreenContext } from "../../Contexts/CreateScreenContext"
import { SelectModalImperativeAPI } from "../../Types/NavigationTypes"
import DatePicker from "../DatePicker"

export interface DateTimePickerModalImperativeAPI extends SelectModalImperativeAPI
{
  
}

const DateTimePickerModal = forwardRef((props, ref: ForwardedRef<DateTimePickerModalImperativeAPI>) =>
{
  const { color, setColor } = useCreateScreenContext()
  const internalRef = useRef<BottomSheetModal>(null)
  // const COLOR_OPTIONS: LabelColors[] = ["blue", "green", "red"]
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
        <DatePicker />
      </View>
    </BottomSheetModal>
  )
})

export default DateTimePickerModal