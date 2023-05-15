import Box from "../Base/Box"
import Row from "../Row"
import Text from "../Text"

import tw from 'twrnc'
import COLORS from "../../Colors"
import Col from "../Col"
import { useState } from "react"

interface DisplayIntervalSwitchProps {

}

const Option = ({selected=false, rounded=[0,0,0,0], text, onPress}: {selected?: boolean, rounded?: number[], text: string, onPress: () => void}) => (
  <Box
    bg={selected ? COLORS.brand.primary : COLORS.bg['300']}
    expand
    py={2}
    rounded={rounded}
    border={[0.25, COLORS.bg['000']]}
    onPress={onPress}
  >
    <Text center bold>{text}</Text>
  </Box>
)
const OPTIONS = ['DAILY', 'MONTHLY', 'YEARLY']
const DisplayIntervalSwitch = (props: DisplayIntervalSwitchProps) => {
  const [selected, setSelected] = useState(0)
  return (
    <Col>
      <Row py={2} align='center' justify='between'>
        <Text bold expand color={COLORS.text['100']} >DISPLAY INTERVAL</Text>
      </Row>
      <Row rounded={1.25}>
        {
          OPTIONS.map((option, index) => (
            <Option
              key={index}
              selected={selected === index}
              rounded={index === 0 ? [0, 0, 1.25, 1.25] : index === OPTIONS.length - 1 ? [1.25, 1.25, 0, 0] : [0, 0, 0, 0]}
              text={option}
              onPress={() => setSelected(index)}
            />
          ))
        }
      </Row>
    </Col>
  )
}

export default DisplayIntervalSwitch