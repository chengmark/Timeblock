import { Platform } from "react-native";
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CalendarPageInterpolatorParams } from "./types";

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
