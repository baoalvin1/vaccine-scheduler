import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from "./src/config";
import { Button, Div, Icon, Text } from "react-native-magnus";

import Form from "./components/Form";
import CalendarContainer from "./components/CalendarContainer";
import ConfirmationContainer from "./components/ConfirmationContainer";
import MapWithInstruction from "./components/MapWithInstruction"
import Map from './components/Map'

export default function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(true);
  const [finalTime, setFinalTime] = useState("")
  const [finalDate, setFinalDate] = useState("")
  const [instruction, setInstruction] = useState(true);
  useEffect(() => {
    let mounted = true;
    setTimeout(function(){ setInstruction(false); }, 7000);
    return () => (mounted = false);
  }, []);
  return (
    <Div>
      {instruction && <MapWithInstruction closeMap={() => setIsMapOpen(false)} />}
      {isMapOpen && !instruction && <Map closeMap={() => setIsMapOpen(false)} />}
      {!isMapOpen && !isFormSubmitted && <Form closeForm={() => setIsFormSubmitted(true)} />}
      {isFormSubmitted && !isScheduled && <CalendarContainer closeCalendar={() => setIsScheduled(true)} updateTime={(time) => setFinalTime(time)} updateDate={(date) => setFinalDate(date)}/>}
      {isScheduled && <ConfirmationContainer finalTime={finalTime} finalDate={finalDate}/>}
    </Div>
  );
}
