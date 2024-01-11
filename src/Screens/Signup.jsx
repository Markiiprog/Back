import {View,Text,ScrollView,Image,TextInput,TouchableOpacity, Alert, } from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColors";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons"; /* link for expo vector icons lang to*/
import { useNavigation } from "@react-navigation/native";
import { authentication, database } from "./../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import uuid from 'react-native-uuid';

const Signup = () => {
  const [isVisbile, setisVisbile] =
    useState(true); /* gamit for toggle ng eye yung sa password */
  const nav = useNavigation(); /* for navigation */

  const [userCredentials, setuserCredentials] = useState({
    name: "", 
    email: "",
    password: "",
  });

  const { email, password, name } = userCredentials;

  const uid=uuid.v4()
  const userAccount = () => {
    createUserWithEmailAndPassword(authentication, email, password) /* RN FIREBASE*/
      .then(() => {
        nav.navigate('Login')
        Alert.alert("User account succesfully created!");
        setDoc(doc(database, "users", uid ), {
          fullname: name,
          email: email,
          id: authentication.currentUser.uid, 
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 20 }}>
        <Image
          style={{ alignSelf: "center", height: 110, width: 110 }}
          source={require("../assets/logo.png")} /* Logo */
        />

        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{ color: myColors.tatlo, fontSize: 24, fontWeight: "500" }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            {" "}
            Enter Your Credentials to continue
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Full Name
          </Text>
          <TextInput
            maxLength={30}
            value= {name}
            onChangeText={(value) => 
              setuserCredentials({...userCredentials, name: value})

            }
            keyboardType="name-phone-pad"
            style={{
              borderColor: "grey",
              borderBottomWidth: 0.5,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(value) => {
              setuserCredentials({ ...userCredentials, email: value });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "grey",
              borderBottomWidth: 0.5,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Password
          </Text>

          <View
            style={{
              borderCOlor: "Grey",
              borderBottomWidth: 0.5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(value) => {
                setuserCredentials({ ...userCredentials, password: value });
              }}
              secureTextEntry={isVisbile}
              maxLength={20}
              keyboardType="ascii-capable"
              style={{
                fontSize: 17,
                marginTop: 15,
                flex: 0.8,
              }}
            />
            <Ionicons
              onPress={() => {
                setisVisbile(!isVisbile);
              }}
              name={
                isVisbile == true
                  ? "eye-off-outline"
                  : "eye-outline" /* JS if else chuchu */
              }
              size={24}
              color="black"
            />
          </View>

          <Text
            numberOfLines={2}
            /* no of lines lang kahit ano mangyare tayo paden */ style={{
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              letterSpacing: 0.6,
              lineHeight: 25,
              width: "95%",
              opacity: 0.7,
            }}
          >
            By continuing you agree to our Terms of Service and
            Privacy Policy
          </Text>
          <TouchableOpacity
            onPress={userAccount}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 30,
              height: 70,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: "500",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Already have an Account?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: "600",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
