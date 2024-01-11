import { View, Text, Textinput, TextInput } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Feather } from "@expo/vector-icons";

const Homesearch = () => {
  return (
    <View>
      <Text style={{ paddingHorizontal: 10, paddingBottom: 8 }}>
        Braille Transciption History
      </Text>

      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: "#F2F3F2",
          height: responsiveHeight(6.5),
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 9,
        }}
      >
        <Feather name="search" size={24} color="black" />
        <TextInput style={{ flex: 1 }} placeholder="Search Transcription" />
      </View>
    </View>
  );
};

export default Homesearch;
