import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColors";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../FirebaseConfig";

const Login = () => {
  const nav = useNavigation();

  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  
  const [isVisbile, setisVisbile] = useState(true);

  const { email, password } = loginCredentials;

  const loginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((value) => {
        nav.replace('HomeScreen')
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <KeyboardAvoidingView
        behavior="padding" 
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} 
        style={{ flex: 1, paddingTop: 20 }}>
        <Image
          style={{ alignSelf: "center", height: 110, width: 110 }}
          source={require("../assets/logo.png")} /* Logo */
        />

        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{ color: myColors.tatlo, fontSize: 24, fontWeight: "500" }}
          >
            Log In
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
            Enter your Email and Password
          </Text>

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
            onChangeText={(value) =>
              setloginCredentials({ ...loginCredentials, email: value })
            }
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
                setloginCredentials({ ...loginCredentials, password: value });
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
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              width: "95%",
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
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
              Log In
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
            <Text style={{ fontSize: 16 }}>Don't have an Account?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: "600",
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    //  </SafeAreaView> 
  );
};

export default Login;
