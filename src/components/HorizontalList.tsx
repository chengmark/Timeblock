
import { FlatList, ListRenderItem, View } from 'react-native'
import tw from 'twrnc'

interface HorizontalListProps<ItemT> {
  data: ItemT[]
  renderItem: ListRenderItem<ItemT> | undefined | null
}


const HorizontalList = <ItemT,>({data, renderItem}: HorizontalListProps<ItemT>) => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default HorizontalList