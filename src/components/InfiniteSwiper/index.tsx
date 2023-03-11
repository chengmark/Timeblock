import React, {
  useState,
  useImperativeHandle,
  useCallback,
  useRef,
  memo,
  forwardRef,
} from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useDerivedValue,
  useAnimatedReaction,
  runOnJS,
  interpolate,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

import { InfiniteSwiperImperativeApi, InfiniteSwiperProps, PageInterpolatorParams } from "./types";
import { DEFAULT_ANIMATION_CONFIG } from "./default";
import PageWrapper from "./PageWrapper";

const VirtualizedSwiper = (
  {
    PageComponent,
    onPageChange,
    pageBuffer = 1,
    minIndex = -Infinity,
    maxIndex = Infinity,
    height = 500,
  }: InfiniteSwiperProps,
  ref: React.ForwardedRef<InfiniteSwiperImperativeApi>
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
    const bufferIndex:number = i - pageBuffer;
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
  const startY = useSharedValue(0);
  const translateY = useSharedValue(0);
  const directionChecked = useSharedValue(false);
  const enabled = useSharedValue(true);
  
  const panGesture = Gesture.Pan()
    .onBegin(() => {
      console.log("swiper onBegin ");
      startX.value = translateX.value;
      startY.value = translateY.value;
    })
    .onUpdate((evt) => {
      console.log("swiper onUpdate ");
      // check if the user is scrolling horizontally or vertically
      if(!directionChecked.value){
        const deltaX = Math.abs(startX.value - evt.translationX);
        const deltaY = Math.abs(startY.value - evt.translationY);
        enabled.value = deltaX > deltaY;
      }
      // if the user is scrolling vertically, don't do anything
      if(!enabled.value) return;
      // if the user is scrolling horizontally, update the translateX value
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
      translateY.value = evt.translationY;
      directionChecked.value = false; // reset the direction check
    })
    .enabled(enabled.value)

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
        bounces={false}
        // style={tw`flex-none`}
      >
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
                height={height}
              />
            );
          })}
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

export default memo(forwardRef(VirtualizedSwiper));
