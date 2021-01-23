import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from "./src/config";
import { Button, Div, Icon, Text } from "react-native-magnus";
import Form from "./components/Form";

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  return (
    <Div>
      {!isFormSubmitted && <Form closeForm={() => setIsFormSubmitted(true)}/>}
      {isFormSubmitted && <Button />}
    </Div>
  );
}
