import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Transcription from './Transcription';
import Ionicons from "@expo/vector-icons/Ionicons";
import { myColors } from '../Utils/MyColors';


const botNav = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <botNav.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: myColors.primary }}>
        <botNav.Screen 
          name= "Home" 
          component={ Home }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                  name="home-sharp"
                  size= {20}
                  color={color}
              />
            )
          }}
        />
        <botNav.Screen name= "Transcription" component={ Transcription } 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons
                  name="document-attach"
                  size= {20}
                  color={color}
              />
            )
          }}
        />
    </botNav.Navigator>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})