import { useMemo } from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import Colors from '../../Colors'
import { useFinanceScreenContext } from '../../Contexts/FinanceScreenContext'
import { formatAmount } from '../utils'
import SectionWrapper from './SectionWrapper'

const BalanceSection = () => {
  const { balance } = useFinanceScreenContext()

  const [integer, decimal]:string[] = useMemo(() => formatAmount(balance), [])

  return (
    <SectionWrapper>
      <Text style={tw`text-[${Colors.text.primary}] text-base`}>
        {`Balance: `}
      </Text>
      <View
        style={tw`flex-row items-center`}
      >
        <Text style={tw`text-[${Colors.text.primary}] text-xl`}>
          {integer}
        </Text>
        <Text style={tw`text-[${Colors.text.primary}] text-base`}>
          {`.${decimal}`}
        </Text>
      </View>
    </SectionWrapper>
  )
}

export default BalanceSection