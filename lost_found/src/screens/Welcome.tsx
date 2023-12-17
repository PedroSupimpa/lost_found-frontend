import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import THEME from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Welcome() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView className="flex-1 bg-indigo-500">
      <View className=" flex-1 justify-around m-4">
        <Text className="text-start text-white text-4xl font-bold">
          Lost & Found
        </Text>
      </View>
      <View>
        <TouchableOpacity
          className="py-3 bg-white mx-7 rounded-xl"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-xl font-bold text-center text-indigo-500">
            Sing up
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          className="py-3 bg-indigo-500 border-white border-2 m-7 rounded-xl"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-xl font-bold text-center text-white">
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
