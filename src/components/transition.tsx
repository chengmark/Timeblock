import { MotiTransitionProp, StyleValueWithReplacedTransforms } from "moti";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const DEFAULT_TRANSITION:MotiTransitionProp<StyleValueWithReplacedTransforms<ViewStyle | ImageStyle | TextStyle>> | undefined = {type:'timing', duration: 100}