import Animated from "react-native-reanimated";
import { defaultPageInterpolator } from "../components/SwipeCalendar/defaults";

type PageComponentType = (props: {
  index: number;
  isActive: boolean;
}) => JSX.Element | null;

export type VirtualizedSwiperProps = {
  PageComponent:
    | PageComponentType
    | React.MemoExoticComponent<PageComponentType>;
  onPageChange: (page: number) => void;
  pageBuffer: number; // number of pages to render on either side of active page
  minIndex: number;
  maxIndex: number;
};

export type VirtualizedSwiperImperativeApi = {
  setPage: (index: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
};

export type PageWrapperProps = {
  pageAnim: Animated.SharedValue<number>;
  index: number;
  pageWidth: Animated.SharedValue<number>;
  PageComponent: PageComponentType;
  isActive: boolean;
  pageInterpolatorRef: React.MutableRefObject<typeof defaultPageInterpolator>;
};

export type PageInterpolatorParams = {
  focusAnim: Animated.DerivedValue<number>;
  pageWidth: Animated.SharedValue<number>;
};