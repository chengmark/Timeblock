import Icon from "./Icon";
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from "../Colors"


const Chevron = ({right=true, color=COLORS.text['100'], size=24}:{right?:boolean, color?:string, size?:number}) => (
  <Icon Component={MaterialComunity} name={`chevron-${right ? 'right' : 'left'}`} color={color} size={size}/>
)
export default Chevron