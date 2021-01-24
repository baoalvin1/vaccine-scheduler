import moment from "moment";
import React, { useState } from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";

export default function ConfirmationView(props) {
  function formatDate() {
    console.log(props.finalDate);
    let d = new Date(props.finalDate);
    let curr_date = d.getDate() + 1;
    let curr_month = d.getMonth();
    let curr_year = d.getFullYear();
    let a = moment([curr_year, curr_month, curr_date]);

    return `${a.format("dddd, MMMM Do")}`;
  }
  return (
    // <Div mt="20%" bg="black" rounded="xl" ml="2%" mr="2%" pb="4%" pt="4%">
    //   <Text
    //     fontFamily="GillSans-Bold"
    //     ml="xl"
    //     fontSize={40}
    //     color="pink600"
    //   >{`YOU HAVE CHOSEN A VACCINE APPOINTMENT AT ${props.finalTime} ON ${formatDate()}`}</Text>
    // </Div>
    <Div>
      <Div m="xl" mt="20%">
        <Div>
          <Div
            rounded="xl"
            h={450}
            // bgImg={{
            //   uri:
            //     "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            // }}
            bgImg={require("../assets/stamps.png")}
            shadow="xl"
          >
            <Div
              bg="transparent"
              shadow="xl"
              rounded="md"
              row
              flexWrap="wrap"
              px="md"
              mt={364}
              m="lg"
              alignSelf="flex-start"
            >
              <Text
                color="white"
                fontSize={24}
                fontFamily="GillSans"
                shadow="2xl"
              >
                {`Your appointment is at ${props.finalTime} on ${formatDate()}`}
              </Text>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div row mt="25%">
        <Icon
          name="mail"
          color="gray600"
          fontSize="6xl"
          ml="20%"
          p={25}
          rounded="circle"
          borderColor="gray400"
          borderWidth={1}
        />
        <Icon
          ml="20%"
          p={25}
          rounded="circle"
          name="cellphone"
          color="teal500"
          fontSize="6xl"
          fontFamily="MaterialCommunityIcons"
          borderColor="gray400"
          borderWidth={1}
        />
      </Div>
      {/* <Div mt="5%">
        <Text color="gray500" textAlign="center" fontSize="6xl" >Reminders</Text>
      </Div> */}
    </Div>
  );
}
