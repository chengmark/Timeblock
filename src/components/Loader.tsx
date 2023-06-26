import { ActivityIndicator } from "react-native"
import Row from "./Row"
import tw from 'twrnc'
const Loader = () => {
  return (
    <Row justify="center" align="center" p={[10, 0, 0, 0]} style={[
      tw`w-full`
    ]}>
      <ActivityIndicator size='large'/>
    </Row>
  )
}

export default Loader