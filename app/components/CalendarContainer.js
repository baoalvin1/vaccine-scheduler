import React, { useState, useEffect } from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";
import CalendarView from "./CalendarView";
import Loading from "./Loading";
import { db } from "../src/config";

export default function CalendarContainer(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    db.ref("/test").on("value", (querySnapShot) => {
      if (mounted) {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        setIsLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Div>
      {isLoading ? (
        <Loading />
      ) : (
        <CalendarView closeCalendar={props.closeCalendar} />
      )}
    </Div>
  );
}
