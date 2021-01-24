import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";

export default function CalendarView(props) {
  const [times, setTimes] = useState([]);
  const selectRef = React.createRef();
  const handleContinue = () => {
    props.closeCalendar()
  }
  return (
    <Div top="30%">
      <Text fontFamily="Futura" fontSize={30} textAlign="center" mb="2xl">
        Scheduler
      </Text>
      <Calendar
        minDate={props.date}
        maxDate={props.date}
        onDayPress={() => {
          if (selectRef.current) {
            selectRef.current.open();
          }
        }}
      />
      <Text fontFamily="Futura" fontSize={14} textAlign="center" mt="2xl">
        Our algorithm selects the best available day for you based on risk
        factors
      </Text>
      <Button
        mx="md"
        my="md"
        block
        suffix={
          <Icon position="absolute" right={8} name="arrowright" color="white" />
        }
        bg="pink600"
        p={12}
        color="white"
        mt="lg"
        onPress={handleContinue}
      >
        Continue
      </Button>
      <Select
        onSelect={setTimes}
        ref={selectRef}
        multiple
        value={times}
        title="Select available times"
        mt="md"
        pb="2xl"
        roundedTop="xl"
        data={[
          "9:00 AM",
          "10:00 AM",
          "11:00 AM",
          "12:00 PM",
          "1:00 PM",
          "2:00 PM",
          "3:00 PM",
          "4:00 PM",
        ]}
        renderItem={(item, index) => (
          <Select.Option value={item} py="md" px="xl">
            <Text>{item}</Text>
          </Select.Option>
        )}
      />
    </Div>
  );
}
