import tw from 'twrnc'
import COLORS from '../Colors';
import Box, { BoxProps } from "./Base/Box";

interface DividerProps extends BoxProps {}

const Divider = ({bg=COLORS.bg['100'], ...rest}: DividerProps) => (
  <Box style={tw`h-[2px] w-full`} bg={bg} {...rest}/>
)

export default Divider