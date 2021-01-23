import React from "react";
import { Button, Div, Text } from "react-native-magnus";
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default function Loading() {
  return (
    <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={0.8}
      >
        {/* <Text>Doing something...</Text> */}
    </AnimatedLoader>
  );
}
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});
