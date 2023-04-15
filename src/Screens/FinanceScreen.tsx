import { View } from "react-native";

import tw from 'twrnc'
import BalanceSection from "../Components/FinanceScreen/BalanceSection";
import { FinanceScreenProvider } from "../Contexts/FinanceScreenContext";
import withProvider from "../Hoc/withProvider";

const FinanceScreen = () => {
  return (
    <View style={tw`flex-1 flex-col`}>
      <BalanceSection />
    </View>
  )
}
export default withProvider(FinanceScreenProvider, FinanceScreen)