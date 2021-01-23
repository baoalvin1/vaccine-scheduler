import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from "./src/config";
import { Button, Div, Icon, Text } from "react-native-magnus";

import Form from "./components/Form";
import CalendarContainer from "./components/CalendarContainer";
import ConfirmationContainer from "./components/ConfirmationContainer";
import Map from './components/Map'

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(true);
  return (
    <Div>
      {isMapOpen && <Map closeMap={() => setIsMapOpen(false)} />}
      {!isMapOpen && !isFormSubmitted && <Form closeForm={() => setIsFormSubmitted(true)} />}
      {isFormSubmitted && !isScheduled && <CalendarContainer closeCalendar={() => setIsScheduled(true)} />}
      {isScheduled && <ConfirmationContainer/>}
    </Div>
  );
}
