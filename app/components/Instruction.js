import React from "react";
import { Button, Div, Text } from "react-native-magnus";

export default function Instruction() {
  return (
    <Div h={1100} bg="black" opacity={0.5}>
      <Text
        mt="80%"
        color="white"
        textAlign="center"
        fontSize="6xl"
        fontFamily="Futura"
      >
        Pick a vaccine center
      </Text>
    </Div>
  );
}
