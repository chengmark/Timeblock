import { StyleProp, Text, View, ViewProps } from 'react-native';
import tw from 'twrnc'
import COLORS from '../Colors';
import { FONT_SIZE } from '../constants';

interface AmountProps {
  currency?: string;
  amount: number;
  style?: StyleProp<ViewProps>;
}

const Amount = ({ currency, amount, style }:AmountProps) => {
  // input a number of amount, output an array where 1st element is the integer part and 2nd element is the decimal part, decimal part correct to 2 decimal places
  const splitAmount = (amount: number):[string, string] => {
    const int = Math.floor(amount).toString();
    const dec = (amount - Math.floor(amount)).toFixed(2).slice(2);
    return [int, dec];
  }

  const [int, dec] = splitAmount(amount);

  return (
    <View style={[
      tw`flex-row items-end`,
      style
    ]}>
      <Text style={tw`text-[${COLORS.label[100]}] font-bold text-[${FONT_SIZE.l}px]`}>
        {int}
      </Text>
      <Text style={tw`text-[${COLORS.label[100]}] font-bold text-[${FONT_SIZE.l}px]`}>
        {`.${dec}`}
      </Text>
      <Text style={tw`text-[${COLORS.label[200]}] text-[${FONT_SIZE.m}px] ml-2`}>
        {currency}
      </Text>
    </View>
  );
};

export default Amount;