import { View } from "react-native"
import Amount from "../Amount"
import Typography from "../Typography"
import Row from "../Row"
import IconTextButton from "../IconTextButton"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import tw from 'twrnc'
import Section from "../Section"
import COLORS from "../../Colors"
import { useFinanceContext } from "../../Contexts/FinanceContext"
import Card from "../../Card"

interface BalanceSectionProps {

}

const BalanceSection = ({}:BalanceSectionProps) => {
  const { balance } = useFinanceContext()
  return (
    <Card col align="start" style={tw`flex-1`}>
      <Typography size="m" style={tw``}> 結餘 </Typography>
      <Amount amount={balance} currency="HKD" style={tw`ml-1 mt-2`}/>
      {/* <View>
        <IconTextButton label="增加" Icon={AntDesignIcon} name='plus' size={16} color={COLORS.background[100]} backgroundColor={COLORS.green}/>
      </View> */}
    </Card>
  )  
}

export default BalanceSection