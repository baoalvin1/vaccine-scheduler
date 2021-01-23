import React, { useState } from "react";
// import { Button, StyleSheet, Text, View } from 'react-native';
import { db } from "../src/config";
import { Button, Div, Icon, Text, Input, Select  } from "react-native-magnus";

export default function Form() {
  const [test, setTest] = useState("");
  const [name, setName] = useState("Name");
  const [age, setAge] = useState("0");
  const [gender, setGender] = useState("Male");
  const [height, setHeight] = useState("62");
  const [weight, setWeight] = useState("125");
  const [social, setSocial] = useState("");
  const [chronic, setChronic] = useState([]);
  const selectRef = React.createRef();
  const getData = () => {
    db.ref("/test").on("value", (querySnapShot) => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      setTest(data);
    });
  };
  const handleSubmit = () => {
    setTest(`${name} ${age} ${gender} ${height} ${weight} ${social} ${chronic}`);
    db.ref("/users").push({
      name: name,
      age: age,
      gender: gender,
      height: height,
      weight: weight,
      social: social,
      chronic: chronic.length ? true : false
    });
  };
  return (
    <Div mt="lg" top="30%">
      <Input
        mx="md"
        my="md"
        placeholder="Name"
        p={10}
        borderColor="gray"
        onChangeText={(name) => setName(name)}
      />
      <Input
        mx="md"
        my="md"
        placeholder="Age"
        p={10}
        focusBorderColor="blue"
        onChangeText={(age) => setAge(age)}
      />
      <Input
        mx="md"
        my="md"
        placeholder="Gender"
        p={10}
        focusBorderColor="blue"
        onChangeText={(gender) => setGender(gender)}
      />
      <Input
        mx="md"
        my="md"
        placeholder="Height (inches)"
        p={10}
        focusBorderColor="blue"
        onChangeText={(height) => setHeight(height)}
      />
      <Input
        mx="md"
        my="md"
        placeholder="Weight (pounds)"
        p={10}
        focusBorderColor="blue"
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
        focusBorderColor="blue"
        secureTextEntry
        onChangeText={(social) => setSocial(social)}
      />
      <Text>{test}</Text>
      <Button
        block
        suffix={
          <Icon position="absolute" right={8} name="arrowright" color="white" />
        }
        bg="blue600"
        p={12}
        color="white"
        rounded="circle"
        mt="lg"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </Div>
  );
}
