import { ReactElement } from 'react';
import FlexBox, { FlexBoxProps } from './Base/FlexBox';

interface RowProps extends Omit<FlexBoxProps, 'col'> {
  children: ReactElement | ReactElement[];
  expand?: boolean;
}

const Row = ({ children, rounded=5, align = 'end', ...otherProps }: RowProps) => (
  <FlexBox
    col={false}
    rounded={rounded}
    align={align}
    {...otherProps}
  >
    {children}
  </FlexBox>
)

export default Row