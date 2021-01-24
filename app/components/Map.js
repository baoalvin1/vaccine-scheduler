import React from "react";
import { Div, Text, Select, Button, Icon } from "react-native-magnus";
import MapView, { Marker, Callout, CalloutSubview } from "react-native-maps";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import CustomCallout from "./CustomCallout";

export default function Map(props) {
  return (
    <View style={{ position: "relative", height: "100%" }}>
      <MapView
        style={{ left: 0, right: 0, top: 0, bottom: 0, position: "absolute" }}
        initialRegion={{
          latitude: 33.7756,
          longitude: -84.3963,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          pinColor="pink"
          coordinate={{ latitude: 33.772819, longitude: -84.392857 }}
          image={require("../assets/pinkmarker.png")}
        >
          <Callout alphaHitTest tooltip>
            <CustomCallout>
              <CalloutSubview
                style={{
                  width: "auto",
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 6,
                  paddingVertical: 6,
                  borderRadius: 12,
                  alignItems: "center",
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                onPress={props.closeMap}
              >
                <Text
                  fontFamily="Futura"
                  color="#4f5b66"
                >{`Bobby Dodd Vaccine Center`}</Text>
                <Text fontFamily="Futura" textAlign="center" color="#008ecc">
                  Schedule An {"\n"} Appointment
                </Text>
              </CalloutSubview>
            </CustomCallout>
          </Callout>
        </Marker>
        <Marker
          pinColor="pink"
          coordinate={{ latitude: 33.7796082, longitude: -84.4050402 }}
          image={require("../assets/pinkmarker.png")}
        >
          <Callout alphaHitTest tooltip>
            <CustomCallout>
              <CalloutSubview
                style={{
                  width: "auto",
                  backgroundColor: "#ffffff",
                  paddingHorizontal: 6,
                  paddingVertical: 6,
                  borderRadius: 12,
                  alignItems: "center",
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                onPress={props.closeMap}
              >
                <Text
                  fontFamily="Futura"
                  color="#4f5b66"
                >{`West Village Vaccine Center`}</Text>
                <Text fontFamily="Futura" textAlign="center" color="#008ecc">
                  Schedule An {"\n"} Appointment
                </Text>
              </CalloutSubview>
            </CustomCallout>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}
