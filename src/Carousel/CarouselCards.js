import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";


import data from "../../data";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);

  return (
    <View style={{marginTop:200}}>
      <Carousel
        // layout="tinder"
        layout="stack"
        useScrollView={true}
        // layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}

      />
    </View>
  );
};

export default CarouselCards;
