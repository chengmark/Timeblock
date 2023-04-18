import { ComponentType } from 'react';
import { View } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import tw from 'twrnc'
import Card from '../../Card'
import COLORS from '../../Colors';
import { lang } from '../../utils';
import Amount from '../Amount'
import Typography from '../Typography'


interface CategoryExpensesCardProps {
  category: string;
  amount: number;
  Icon:ComponentType<IconProps>
  name:string
}

const CategoryExpensesCard = ({category, amount, Icon, name}:CategoryExpensesCardProps) => {
 return (
  <Card align='end' style={tw`min-w-[150px]`}>
    <View>
      <Typography size="xs" style={tw`mb-2`} color={COLORS.label[200]}>{lang(category)}</Typography>
      <Amount amount={Math.abs(amount)} currency="HKD"/>
    </View>
  </Card>
 )
}

export default CategoryExpensesCard