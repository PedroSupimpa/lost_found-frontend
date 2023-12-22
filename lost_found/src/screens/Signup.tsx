import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { createUser } from "../service/userService";

export default function Signup() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const creatingUser = {
    name: "John Doe",
    phone: "123456789",
    email: "JohnDoe@gmail.com",
    password: "123456789",
    address: {
      zipcode: "123456789",
      address: "John Doe's Street",
      number: "123",
    },
  };

  return (
    <SafeAreaView className="flex-1 bg-indigo-500 justify-center">
      <TouchableOpacity className="p-5" onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <View className="pt-10 px-4">
        <Text className="text-start text-white text-4xl font-bold">
          Create account
        </Text>
      </View>
      <View className="flex-1 items-center justify-end m-6">
        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <TextInput placeholder="Name" />
        </View>

        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <TextInput placeholder="Email" />
        </View>

        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <TextInput placeholder="Password" secureTextEntry={true} />
        </View>

        <TouchableOpacity
          className="bg-indigo-700 w-full py-3 rounded-md my-2"
          onPress={() => createUser(creatingUser)}
        >
          <Text className="text-white text-center font-bold">Sign up</Text>
        </TouchableOpacity>

        <Text className="my-2 text-white">or</Text>

        <TouchableOpacity className="bg-transparent border border-white w-full py-3 rounded-md my-2">
          <Text
            className="text-white text-center font-bold"
            onPress={() => navigation.navigate("Login")}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
