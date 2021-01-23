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
  const selectRef = React.createRef();
  const handleSubmit = () => {
    setTest(
      `${name} ${age} ${gender} ${height} ${weight} ${social} ${chronic}`
    );
    db.ref("/users").push({
      name: name,
      age: age,
      gender: gender,
      height: height,
      weight: weight,
      ssn: social,
      chronic: chronic.length ? true : false,
    });
    props.closeForm();
  };
  return (
    <Div mt="lg" top="10%">
      {/* <Icon name="hearto" fontSize={128} color="green400"/> */}
      <Div alignItems="center">
        <FontAwesome5
          name="hand-holding-medical"
          size={128}
          color="#68d391"
        ></FontAwesome5>
      </Div>
      <Text fontWeight="bold" fontSize={30} textAlign="center" mb="2xl">
        Registration
      </Text>
      <Input
        mx="md"
        my="md"
        placeholder="Name"
        p={10}
        borderColor="gray300"
        focusBorderColor="green400"
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
        focusBorderColor="green400"
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
        focusBorderColor="green400"
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
        focusBorderColor="green400"
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
        focusBorderColor="green400"
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
        focusBorderColor="green400"
        borderWidth={1}
        rounded="circle"
        secureTextEntry
        onChangeText={(social) => setSocial(social)}
      />
      <Text>{test}</Text>
      <Button
        mx="md"
        my="md"
        block
        suffix={
          <Icon position="absolute" right={8} name="arrowright" color="white" />
        }
        bg="green400"
        p={12}
        color="white"
        mt="lg"
        onPress={handleSubmit}
      >
        Submit
      </Button>
    </Div>
  );
}
