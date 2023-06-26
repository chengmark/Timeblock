import COLORS, { transparent } from "../../../Colors"
import Badge from "../../Badge"
import Row from "../../Row"
import Text from "../../Text"

import Material from 'react-native-vector-icons/MaterialIcons'
import Icon from "../../Icon"
import { buildArray } from "../../../utils"

import tw from 'twrnc'
import { useMemo } from "react"
import { getSubCategories } from "../../../categories"
import { useAddTransactionContext } from "../../../Contexts/AddTransactionContext"

interface SubCategoryBadgeProps {
  icon?: string
  title?: string
  selected?: boolean
  onPress?: () => void
}

const SubCategoryBadge = ({icon, title, selected=false, onPress}: SubCategoryBadgeProps) =>
  <Badge
    py={0.625}
    px={1.25}
    gap={0.625}
    bg={selected ? transparent(0.7, COLORS.brand.primary) : transparent(0.7, COLORS.bg['400'])}
    border={[0.25, selected ? COLORS.brand.primary : COLORS.bg['400']]}
    Icon={ icon ? () => <Icon Component={Material} name={icon} size={14} color={COLORS.text['000']}/> : undefined}
    Text={ title ? () => <Text size='l' bold>{title.toUpperCase()}</Text> : undefined}
    onPress={onPress}
  />

const AddSubCategoryBadge = ({onPress}: {onPress: () => void}) => <Badge
    py={0.625}
    px={4.5}
    gap={0.625}
    bg={transparent(0.7, COLORS.bg['400'])}
    border={[0.25, COLORS.bg['400']]}
    Text={() => <Text size='l' bold>{'+'}</Text>}
    onPress={onPress}
  />

const SubCategoryRow = () => {
  const { selectedCategory, selectedSubCategory, setSelectedSubCategory, setShowCreateSubCategoryDialog } = useAddTransactionContext()
  const subCategories = useMemo(() => getSubCategories(selectedCategory), [selectedCategory])
  return (
    <Row gap={2.25} px={0.625} py={2} style={tw`flex-wrap`}>
      <>
        {
          subCategories.map((subCategory) => (
            <SubCategoryBadge
              icon={subCategory?.icon}
              title={subCategory?.title}
              key={subCategory?.title}
              selected={selectedSubCategory === subCategory?.title}
              onPress={() => setSelectedSubCategory(subCategory.title)}
            />)
          )
        }
        <AddSubCategoryBadge onPress={() => setShowCreateSubCategoryDialog(true)}/>
      </>
    </Row>
  )
}

export default SubCategoryRow