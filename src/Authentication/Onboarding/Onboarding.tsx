import React, { useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useValue, onScrollEvent, interpolateColor } from "react-native-redash/lib/module/v1";
import Animated, { multiply } from "react-native-reanimated";

import Slide, { SLIDE_HEIGHT } from "./Slider";
import Subslide from "./Subslide";

const BORDER_RADUIS = 75;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider : {
        height: SLIDE_HEIGHT,
        //backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADUIS,
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flexDirection: "row",
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADUIS
    },
});

const slides = [
    {
      title: "Relaxed", 
      subtitle: "Find Your Outfits",
      description:
        "Confused about your outfit? Don't worry! Find the best outfit here!",
      color: "#BFEAF5"
    },
    {
      title: "Playful",
      subtitle: "Hear it First, Wear it First",
      description:
        "Hating the clothes in your wardrobe? Explose hundreds of outfit ideas",
      color: "#BEECC4"
    },
    {
      title: "Excentric",
      subtitle: "Your Style, Your Way",
      description:
        "Create you r indiividual & unique style and look amazing everyday",
      color: "#FFE4D9"
    },
    {
      title: "Funky",
      subtitle: "Look Good, Feel Good",
      description:
        "Discover the latest trends in flashion and explore your personality",
      color: "#FFDDDD"
    },

]

const ComponentName = () => {
    const scroll = useRef<Animated.ScrollView>(null);
    const x = useValue(0);
        //TODO:  ScrollHandler useScrollHandler?
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor (x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slides => slides.color),
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                  ref={scroll}
                  horizontal
                  snapToInterval={width}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  scrollEventThrottle={1}
                  {...{ onScroll }}
                >
                    {slides.map(({ title }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ title }} />
                    ))}
                </Animated.ScrollView>   
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View
                  style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
                />
                <Animated.View style={[
                    styles.footerContent, 
                    {
                      width: width * slides.length,
                      flex: 1,
                      transform: [{ translateX: multiply(x, -1) }],
                    },
                ]}>
                    {slides.map(({ subtitle, description }, index) => (
                        <Subslide
                          key={index}
                          onPress={() => {
                              if (scroll.current) {
                                scroll.current
                                .getNode()
                                .scrollTo({ x: width * (index + 1), animated: true});
                              }
                          }}
                          last={index === slides.length - 1}
                          {...{ subtitle, description }}
                        />
                    ))}
                </Animated.View>
            </View>
        </View>
    );
};

export default ComponentName;