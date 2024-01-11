import { View, Text, Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Homebanner = () => {
  return (
    <View>
      <Image style = {{height:responsiveHeight(13), width: 320, borderRadius: 10}} source={require("../assets/team17.png")}/>
    </View>
  )
}

export default Homebanner