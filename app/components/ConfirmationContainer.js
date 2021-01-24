import React, { useState, useEffect } from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";
import Loading from "./Loading";
import { db } from "../src/config";
import ConfirmationView from "./ConfirmationView"

export default function ConfirmationContainer(props) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let mounted = true;
    setTimeout(function(){ setIsLoading(false); }, 3000);
    return () => (mounted = false);
  }, []);

  return (
    <Div>
      {isLoading ? (
        <Loading />
      ) : (
        <ConfirmationView finalTime={props.finalTime} finalDate={props.finalDate}/>
      )}
    </Div>
  );
}