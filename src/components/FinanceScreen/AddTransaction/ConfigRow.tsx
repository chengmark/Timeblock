import COLORS, { transparent } from "../../../Colors"
import Badge from "../../Badge"
import Row from "../../Row"
import Text from "../../Text"

import Material from 'react-native-vector-icons/MaterialIcons'
import Icon from "../../Icon"

import tw from 'twrnc'
import { useMemo } from "react"
import { getSubCategories } from "../../../categories"
import { useAddTransactionContext } from "../../../Contexts/AddTransactionContext"
import { FlatList, View } from "react-native"

interface SubCategoryBadgeProps {
  icon?: string
  title?: string
  selected?: boolean
  onPress?: () => void
}

const ConfigBadge = ({icon, title, onPress}: SubCategoryBadgeProps) =>
  <Badge
    mx={0.625}
    py={1.25}
    px={2.75}
    gap={0.625}
    rounded={0.625}
    bg={transparent(0.7, COLORS.bg['500'])}
    border={[0.25, COLORS.bg['500']]}
    Icon={ icon ? () => <Icon Component={Material} name={icon} size={14} color={COLORS.text['000']}/> : undefined}
    Text={ title ? () => <Text size='l' bold>{title.toUpperCase()}</Text> : undefined}
    onPress={onPress}
  />

const ConfigRow = () => {
  const { selectedCategory, selectedSubCategory, setSelectedSubCategory, setShowCreateSubCategoryDialog, setShowSelectCategoryDialog } = useAddTransactionContext()
  const subCategories = useMemo(() => getSubCategories(selectedCategory), [selectedCategory])

  const configActions = [
    {
      title: `CATEGORY:${selectedCategory}`,
      icon: 'category',
      onPress: () => setShowSelectCategoryDialog(true)
    },
    {
      title: 'DATE:TODAY',
      icon: 'event',
      onPress: () => {} // show calendar picker
    },
    {
      title: 'REPEAT:NONE',
      icon: 'repeat',
      onPress: () => {} // show set repeat modal
    }
  ]
  return (
    <Row px={0.625} py={2} style={tw`flex-wrap`}>
      <FlatList
        horizontal
        data={configActions}
        renderItem={
          ({item:action}) => <ConfigBadge icon={action?.icon} title={action?.title} onPress={action?.onPress}/>
        }
        keyExtractor={item => item.title}
      />
    </Row>
  )
}

export default ConfigRow