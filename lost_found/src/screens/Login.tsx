import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import THEME from "../theme";

const LoginScreen = () => {
  return (
    <SafeAreaView
      className="flex-1 "
      style={{ backgroundColor: THEME.colors.secondary }}
    >
      <View className="flex-">
        <View className="flex-row justify-start"></View>
        <Text>LoginScreens</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
