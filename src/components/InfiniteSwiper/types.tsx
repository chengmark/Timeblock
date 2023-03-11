import { Platform } from "react-native";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

export type PageComponentType = (props: {
  index: number;
  isActive?: boolean;
}) => JSX.Element | null;

export type InfiniteSwiperProps = {
  PageComponent: PageComponentType | React.MemoExoticComponent<PageComponentType>;
  onPageChange: (page: number) => void;
  pageBuffer: number; // number of pages to render on either side of active page
  minIndex: number;
  maxIndex: number;
  height: number;
};

export type InfiniteSwiperImperativeApi = {
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
  height: number;
};

export type PageInterpolatorParams = {
  focusAnim: Animated.DerivedValue<number>;
  pageWidth: Animated.SharedValue<number>;
};

export type CalendarPageInterpolatorParams = PageInterpolatorParams

export type CalendarPageInterpolator = (
  params: CalendarPageInterpolatorParams
) => ReturnType<typeof useAnimatedStyle>;

export function defaultPageInterpolator({
  focusAnim,
  pageWidth,
}: CalendarPageInterpolatorParams): ReturnType<typeof useAnimatedStyle> {
  "worklet";

  const inputRange = [-1, 0, 1];

  const translateX = interpolate(focusAnim.value, inputRange, [
    -pageWidth.value,
    0,
    pageWidth.value,
  ]);

  const opacity = interpolate(
    focusAnim.value,
    inputRange,
    [1, 1, 1],
    Extrapolate.CLAMP
  );

  // Before pagewidth is known focusAnim will be a ridiculously high number
  if (Platform.OS === "android" && focusAnim.value > 999) {
    // Android has an issue where on initialization, opacity will get stuck at the initial opaicty,
    // even if it immediately updates later. Hack fix is to omit it from the initial style.
    return { transform: [{ translateX }] };
  }

  return {
    transform: [{ translateX }],
    opacity,
  };
}