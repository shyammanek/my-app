import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import React from "react";
import { Animated, View } from "react-native";
import Carousel from "react-native-snap-carousel";

import data from "../../data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={{ marginTop: 200 }}>
      <Carousel

        layout="tinder"
        // layout="stack"
        useScrollView={true}
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        startAutoplay={true}
        autoplayDelay={200}
        snapToItem={
          isCarousel.current
           ? isCarousel.current.snapToItem(0)
            : 0
        }
        activeAnimationOptions={Animated.SpringAnimationConfig}

      />
    </View>
  );
};

export default CarouselCards;
