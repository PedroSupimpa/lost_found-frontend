import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { IUserRequest, createUser } from "../service/userService";

export default function Signup() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: {
        zipcode: "",
        address: "",
        number: "",
      },
    },
  });

  const onSubmit = async (data: IUserRequest) => {
    try {
      await createUser(data);
      reset();
    } catch (error) {
      console.error(error);
      alert(
        "Signup failed. Please check your internet connection and try again."
      );
    }
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
        {/* Name Input */}
        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <Controller
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Full name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="bg-white w-full rounded-md my-2 py-2 px-4"
              />
            )}
            name="name"
          />
          {errors.name && <Text>{errors.name.message}</Text>}
        </View>

        {/* Name Input */}
        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <Controller
            control={control}
            rules={{ required: "Phone is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Phone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="bg-white w-full rounded-md my-2 py-2 px-4"
              />
            )}
            name="phone"
          />
          {errors.phone && <Text>{errors.phone.message}</Text>}
        </View>

        {/* Email Input */}
        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <Controller
            control={control}
            rules={{ required: "Email is required" }}
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
          {errors.email && <Text>{errors.email.message}</Text>}
        </View>

        {/* Password Input */}
        <View className="bg-white w-full rounded-md my-2 py-2 px-4">
          <Controller
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
                className="bg-white w-full rounded-md my-2 py-2 px-4"
              />
            )}
            name="password"
          />
          {errors.password && <Text>{errors.password.message}</Text>}
        </View>

        <TouchableOpacity
          className="bg-indigo-700 w-full py-3 rounded-md my-2"
          onPress={handleSubmit(onSubmit)} // This line handles the form submission
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
