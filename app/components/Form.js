import React, { useState } from "react";
// import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from "../src/config";
import { Button, Div, Icon, Text, Input, Select } from "react-native-magnus";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Form(props) {
  const [test, setTest] = useState("");
  const [name, setName] = useState("Name");
  const [age, setAge] = useState("0");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("62");
  const [weight, setWeight] = useState("125");
  const [social, setSocial] = useState("");
  const [chronic, setChronic] = useState([]);
  const [timestamp, setTimestamp] = useState(["0"]);
  const [schedule, setSchedule] = useState(["0"]);
  const selectRef = React.createRef();

  const handleSubmit = () => {
    setTest(
      `${name} ${age} ${gender} ${height} ${weight} ${social} ${chronic}`
    );
    let userData = {
      name: name,
      age: age,
      gender: gender,
      height: height,
      weight: weight,
      ssn: social,
      chronic: chronic.length ? true : false,
      timestamp: Date.now(),
      schedule: "2021-01-22"
    }
    db.ref("/users").push(userData, function(error) {
      if (error) {
        console.log(error);
        return;
      } else {
        let date = runTriage();
        console.log(date);
      }
    });

    props.closeForm();
  };

  function runTriage() {
    console.log("fetching python localhost");
    fetch('/').then(res => res.json()).then(data => {
      return data.date;
    });
    return "2021-01-22";
  }
  
  return (
    <Div mt="lg" top="10%">
      {/* <Icon name="hearto" fontSize={128} color="green400"/> */}
      <Div row alignItems="center">
      <Text ml="xl" color="pink400" fontWeight="bold" fontSize={30} textAlign="left" mb="2xl" fontFamily="Futura">
        Registration
      </Text>
      <Div flex={1} alignItems="flex-end" mr="10%" mb="10%">
        <FontAwesome5
          name="hand-holding-medical"
          size={64}
          color="#f687b3"
        ></FontAwesome5>
        </Div>
      </Div>
      
      <Input
        mx="md"
        my="md"
         
        placeholder="Name"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        onChangeText={(name) => setName(name)}
      />
      <Input
        mx="md"
        my="md"
         
        placeholder="Age"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        onChangeText={(age) => setAge(age)}
      />
      <Input
        mx="md"
        my="md"
         
        placeholder="Gender"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        onChangeText={(gender) => setGender(gender)}
      />
      <Input
        mx="md"
        my="md"
         
        placeholder="Height (inches)"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        onChangeText={(height) => setHeight(height)}
      />
      <Input
        mx="md"
        my="md"
         
        placeholder="Weight (pounds)"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        onChangeText={(weight) => setWeight(weight)}
      />

      <Button
        mx="md"
        my="md"
        block
        borderWidth={1}
        bg="white"
        borderColor="gray300"
        color="gray600"
        rounded="circle"
        onPress={() => {
          if (selectRef.current) {
            selectRef.current.open();
          }
        }}
      >
        {chronic.length ? chronic.toString() : "Select Chronic Disease(s)"}
      </Button>

      <Select
        onSelect={setChronic}
        ref={selectRef}
        multiple
        value={chronic}
        title="Select chronic diseases"
        mt="md"
        pb="2xl"
        message="If you have no history of past chronic disease leave blank"
        roundedTop="xl"
        data={["COPD", "Cardiovascular Disease", "Diabetes", "Other"]}
        renderItem={(item, index) => (
          <Select.Option value={item} py="md" px="xl">
            <Text>{item}</Text>
          </Select.Option>
        )}
      />
      <Input
        mx="md"
        my="md"
        placeholder="Social Security ***-**-****"
        p={10}
        borderColor="gray300"
        focusBorderColor="pink400"
        borderWidth={1}
        rounded="circle"
        secureTextEntry
        onChangeText={(social) => setSocial(social)}
      />
      <Button
        mx="md"
        block
        suffix={
          <Icon position="absolute" right={8} name="arrowright" color="white" />
        }
        bg="pink400"
        p={12}
        color="white"
        mt="30%"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </Div>
  );
}
