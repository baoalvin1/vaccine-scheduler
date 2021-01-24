import React, { useState, useEffect } from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";
import CalendarView from "./CalendarView";
import Loading from "./Loading";
import { db } from "../src/config";

export default function CalendarContainer(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("2021-01-24");

  useEffect(() => {
    let mounted = true;
    setTimeout(function () {
      db.ref("/users").on("value", (querySnapShot) => {
        if (mounted) {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let num = 0;
          let final;
          for (let entry in data) {
            if (data[entry]["timestamp"] > num) {
              final = data[entry]["schedule"];
              num = data[entry]["timestamp"];
            }
          }
          setDate(final);
          console.log(final);
          props.updateDate(final);
          setIsLoading(false);
        }
      });
    }, 8000);

    return () => (mounted = false);
  }, []);

  return (
    <Div>
      {isLoading ? (
        <Loading />
      ) : (
        <CalendarView
          closeCalendar={props.closeCalendar}
          date={date}
          updateTime={props.updateTime}
        />
      )}
    </Div>
  );
}
