import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Homeicon = () => {
  return (
    <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
      <Image style = {{ width: 50, height:50,  }} source = {require('../assets/logo.png')} />
    </View>
  );
};

export default Homeicon