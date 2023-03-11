import { memo } from "react";
import Animated, { useAnimatedStyle, useDerivedValue } from "react-native-reanimated";
import { PageWrapperProps } from "./types";
import tw from 'twrnc'

const PageWrapper = memo(
  ({
    index,
    pageAnim,
    pageWidth,
    PageComponent,
    isActive,
    pageInterpolatorRef,
    height
  }: PageWrapperProps) => {
    const translation = useDerivedValue(() => {
      const translateX = (index - pageAnim.value) * pageWidth.value;
      return translateX;
    }, []);

    const focusAnim = useDerivedValue(() => {
      if (!pageWidth.value) return 99999;
      return translation.value / pageWidth.value;
    }, []);

    const animStyle = useAnimatedStyle(() => {
      const isInactivePageBeforeInit = index !== 0 && !pageWidth.value;
      const _pageWidth = isInactivePageBeforeInit ? focusAnim : pageWidth;
      // console.log(focusAnim.value, pageAnim.value, pageWidth.value, index);
      return pageInterpolatorRef.current({
        focusAnim,
        pageWidth: _pageWidth,
      });
    }, [focusAnim, pageWidth, pageAnim, index, translation]);

    return (
      <Animated.View style={[ tw`inset-0 absolute z-0 h-[${height}px]`, animStyle, isActive && tw`relative`]}>
        <PageComponent
          index={index}
          isActive={isActive}
        />
      </Animated.View>
    );
  }
);

export default PageWrapper;