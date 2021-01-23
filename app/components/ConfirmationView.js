import React, { useState } from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";

export default function ConfirmationView() {
  return (
    <Div>
      <Icon mt="30%" name="heart"/>
      <Text fontFamily="Futura" textAlign="center">Hello World!</Text>
    </Div>
  );
}