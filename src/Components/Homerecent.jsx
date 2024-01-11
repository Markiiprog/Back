import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MyColors, myColors } from "./../Utils/MyColors"

const Homerecent = ({title}) => {
  return (
    <View
      style={ styles.RecentContainer }
    >
      <Text style = {{fontSize: 17, fontWeight: '800'}}>{title}</Text>
      <Text style = {{ fontSize: 15, color: myColors.primary }}>See All</Text>

    </View>
  );
};

export default Homerecent;

const styles = StyleSheet.create({
  RecentContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  }
})
