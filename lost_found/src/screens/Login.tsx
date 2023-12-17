import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";

export default function Signup() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: { email: string; password: string }) =>
    console.log(data);
  return (
    <SafeAreaView className="flex-1 bg-indigo-500 justify-center">
      <TouchableOpacity className="p-5" onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <View className="pt-10 px-4">
        <Text className="text-start text-white text-4xl font-bold">
          Welcome back
        </Text>
      </View>

      <View className="flex-1 items-center justify-end m-5">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="bg-white w-full rounded-md my-2 py-2 px-4"
            />
          )}
          name="email"
        />
        {errors.email && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className="bg-white w-full rounded-md my-2 py-2 px-4"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <TouchableOpacity className="w-full mb-5">
          <Text className="text-right text-white">Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-transparent border border-white w-full py-3 rounded-md my-2">
          <Text
            className="text-white text-center font-bold"
            onPress={handleSubmit(onSubmit)}
          >
            Log In
          </Text>
        </TouchableOpacity>

        <Text className="my-2 text-white">or</Text>

        <TouchableOpacity
          className="bg-indigo-700 w-full py-3 rounded-md my-2"
          onPress={() => navigation.navigate("Signup")}
        >
          <Text className="text-white text-center font-bold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
