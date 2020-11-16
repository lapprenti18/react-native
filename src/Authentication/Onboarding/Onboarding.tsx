import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Slide, { SLIDE_HEIGHT } from "./Slider"

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider : {
        height: SLIDE_HEIGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
});

const ComponentName = () => {
    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <ScrollView horizontal
                  snapToInterval={width}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                >
                    <Slide label ="Relaxed" />
                    <Slide label ="Playful" right/>
                    <Slide label ="Excentric" />
                    <Slide label ="Funky" right/>
                </ScrollView>   
            </View>
            <View style={styles.footer}>
                <View
                  style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan"}}
                />
                <View style={{flex: 1, backgroundColor: "white", borderTopLeftRadius: 75}}>

                </View>
            </View>
        </View>
    );
};

export default ComponentName;