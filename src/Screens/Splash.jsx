import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { myColors } from '../Utils/MyColors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const nav=useNavigation()

    useEffect(() => {
     setTimeout(() => {
        nav.replace('Signup')
     }, 4000);
    }, []);


    return (
        <View style = {{ backgroundColor: myColors.primary,flex:1,justifyContent:'center'}}>
            <StatusBar style='light'/>
           <View style= {{ flexDirection: "row", alignItems:"center",justifyContent:"center", gap: 2 }}>
             <Image style={{ tintColor:'white', height:90, width: 95 }} source={require('../assets/logo.png')} />
        
        <View>
            <Text style={{ fontSize: 65, color:myColors.secondary }}> MBraille </Text>
            <Text style = {{ color:myColors.secondary, fontSize: 17, textAlign: 'center',letterSpacing: 2, top: -10 }}> Online Braille Transcription </Text>

        </View>


        </View>
        </View>
    )
}

export default Splash
