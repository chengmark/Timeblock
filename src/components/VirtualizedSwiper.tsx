import React, {
  useState,
  useImperativeHandle,
  useCallback,
  useRef,
  memo,
  forwardRef,
  useEffect,
} from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useDerivedValue,
  useAnimatedReaction,
  runOnJS,
  interpolate,
  WithSpringConfig,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import tw from 'twrnc'
import useForceUpdate from "../hooks/useForceUpdate";
import { PageInterpolatorParams, PageWrapperProps, VirtualizedSwiperImperativeApi, VirtualizedSwiperProps } from "../types/VirtualizedSwiperTypes";
import { PageComponentType } from "../types/CalendarTypes";

export const DEFAULT_ANIMATION_CONFIG: WithSpringConfig = {
  damping: 20,
  mass: 0.2,
  stiffness: 100,
  overshootClamping: false,
  restSpeedThreshold: 0.2,
  restDisplacementThreshold: 0.2,
};

const VirtualizedSwiper = (
  {
    PageComponent,
    onPageChange,
    pageBuffer = 1,
    minIndex = -Infinity,
    maxIndex = Infinity,
  }: VirtualizedSwiperProps,
  ref: React.ForwardedRef<VirtualizedSwiperImperativeApi>
) => {
  const pageWidth = useSharedValue(0);
  const translateX = useSharedValue(0);
  const [curIndex, setCurIndex] = useState(0);
  const pageAnimInternal = useSharedValue(0);
  const pageAnim = pageAnimInternal;

  const pageInterpolatorRef = useRef(defaultPageInterpolator);
  pageInterpolatorRef.current = defaultPageInterpolator;

  const curIndexRef = useRef(curIndex);
  curIndexRef.current = curIndex;

  const setPage = useCallback(
    (index: number) => {
      const updatedTranslateX = index * pageWidth.value * -1;
      translateX.value = withSpring(updatedTranslateX, DEFAULT_ANIMATION_CONFIG);
    },
    [pageWidth, translateX]
  );

  useImperativeHandle(
    ref,
    () => ({
      setPage,
      incrementPage: () => setPage(curIndexRef.current + 1),
      decrementPage: () => setPage(curIndexRef.current - 1),
    }),
    [setPage]
  );

  const pageIndices = [...Array(pageBuffer * 2 + 1)].map((_, i) => {
    const bufferIndex = i - pageBuffer;
    return curIndex - bufferIndex;
  });

  useDerivedValue(() => {
    if (pageWidth.value)
      pageAnim.value = (translateX.value / pageWidth.value) * -1
  }, [pageAnim, translateX]);

  function onPageChangeInternal(pg: number) {
    onPageChange?.(pg);
    setCurIndex(pg);
  }

  useAnimatedReaction(
    () => Math.round(pageAnim.value),
    (cur, prev) => {
      if (cur !== prev) runOnJS(onPageChangeInternal)(cur)
    },
    []
  );

  const startX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      startX.value = translateX.value;
    })
    .onUpdate((evt) => {
      const rawVal = startX.value + evt.translationX;
      const page = -rawVal / pageWidth.value;
      if (page >= minIndex && page <= maxIndex) {
        translateX.value = rawVal;
      }
    })
    .onEnd((evt) => {
      const isFling = Math.abs(evt.velocityX) > 500;
      let velocityModifier = isFling ? pageWidth.value / 2 : 0;
      if (evt.velocityX < 0) velocityModifier *= -1;
      let page = -1 * Math.round((translateX.value + velocityModifier) / pageWidth.value);
      if (page < minIndex) page = minIndex;
      if (page > maxIndex) page = maxIndex;

      translateX.value = withSpring(-page * pageWidth.value, DEFAULT_ANIMATION_CONFIG);
    })

  return (
    <GestureDetector
      gesture={Gesture.Simultaneous(panGesture)}
    >
      <Animated.ScrollView
        // horizontal
        // scrollEnabled={false}
        onLayout={({ nativeEvent }) => {
            pageWidth.value = nativeEvent.layout.width
          }
        }
        // style={tw`flex-none`}
      >
        <>
          {pageIndices.map((pageIndex) => {
            return (
              <PageWrapper
                key={`page-provider-wrapper-${pageIndex}`}
                pageAnim={pageAnim}
                index={pageIndex}
                pageWidth={pageWidth}
                isActive={pageIndex === curIndex}
                PageComponent={PageComponent}
                pageInterpolatorRef={pageInterpolatorRef}
              />
            );
          })}
          {/* {console.log("rendering the hack", pageWidth.value )} */}
          {/* <View style={[{zIndex: 100, backgroundColor: 'red',position:'absolute' ,height:240, width: pageWidth.value}, animWidth]} /> */}
          {/* <View style={{zIndex: 100, backgroundColor: 'red',position:'absolute' ,height:240, width: pageWidth.value, transform:[{translateX: pageWidth.value}]}} /> */}
          {/* <View style={{zIndex: 100, backgroundColor: 'red',position:'absolute' ,height:240, width: pageWidth.value, transform:[{translateX: -pageWidth.value}]}} /> */}
        </>
      </Animated.ScrollView>
    </GestureDetector>
  );
}


function defaultPageInterpolator({focusAnim,pageWidth}: PageInterpolatorParams): ReturnType<typeof useAnimatedStyle> {
  "worklet";
  return {
    transform: [
      {
        translateX: interpolate(
          focusAnim.value,
          [-1, 0, 1],
          [-pageWidth.value, 0, pageWidth.value]
        ),
      },
    ],
  };
}

const PageWrapper = React.memo(
  ({
    index,
    pageAnim,
    pageWidth,
    PageComponent,
    isActive,
    pageInterpolatorRef
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
      // Short circuit page interpolation to prevent buggy initial values due to possible race condition:
      // https://github.com/software-mansion/react-native-reanimated/issues/2571
      const isInactivePageBeforeInit = index !== 0 && !pageWidth.value;
      const _pageWidth = isInactivePageBeforeInit ? focusAnim : pageWidth;
      // console.log(focusAnim.value, pageAnim.value, pageWidth.value, index);
      return pageInterpolatorRef.current({
        focusAnim,
        pageWidth: _pageWidth,
      });
    }, [focusAnim, pageWidth, pageAnim, index, translation]);

    return (
      <Animated.View style={[ tw`inset-0 absolute z-0`, animStyle, isActive && tw`relative`]}>
        <PageComponent
          index={index}
          isActive={isActive}
        />
      </Animated.View>
    );
  }
);

export default memo(forwardRef(VirtualizedSwiper));
