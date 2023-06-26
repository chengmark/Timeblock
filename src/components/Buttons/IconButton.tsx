import { Pressable } from "react-native"
import Icon, { IconProps } from "../Icon"
import tw from 'twrnc'
import COLORS from "../../Colors"
import { isLayoutArray, isTRBL, isYX, Layout, LayoutXY } from "../../styleUtils"

export interface IconButtonProps extends IconProps {
  onPress?: () => void
  p?: Layout
  px?: LayoutXY
  py?: LayoutXY
  bg?: string
  rouneded?: string
}

const IconButton = ({onPress, p=0, px=0, py=0, bg=COLORS.bg['100'], rouneded='3.75', m, mx, my, ...iconProps}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        p && isYX(p) ? tw`px-${p[0]} py-${p[1]}`: tw``,
        p && isTRBL(p) ? tw`pt-${p[0]} pr-${p[1]} pb-${p[2]} pl-${p[3]}`: tw``,
        p && !isLayoutArray(p) ? tw`p-${p}` : tw``,
        px ? tw`px-${px}` : null,
        py ? tw`py-${py}` : null,
        bg ? tw`bg-[${bg}]` : null,
        tw`rounded-${rouneded}`,
        m && isYX(m) ? tw`mx-${m[0]} my-${m[1]}`: tw``,
        m && isTRBL(m) ? tw`mt-${m[0]} mr-${m[1]} mb-${m[2]} ml-${m[3]}`: tw``,
        m && !isLayoutArray(m) ? tw`m-${m}`: tw``,
        mx ? tw`mx-${mx}` : null,
        my ? tw`my-${my}` : null,
      ]}
    >
      <Icon {...iconProps}/>
    </Pressable>
  )
}

export default IconButton