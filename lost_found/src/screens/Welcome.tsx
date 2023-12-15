import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import THEME from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: THEME.colors.primary }}
    >
      <View className=" flex-1 flex justify-around my-4">
        <Text className="text-center text-white text-4xl font-bold">
          Let's Get Started
        </Text>
      </View>
      <View className="space-y-4">
        <TouchableOpacity
          className="py-3 bg-yellow-400 mx-7 rounded-xl"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-xl font-bold text-center text-gray-700">
            Sing Up
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center mb-5">
        <Text className="text-white font-semibold my-4">
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-yellow-400 font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
