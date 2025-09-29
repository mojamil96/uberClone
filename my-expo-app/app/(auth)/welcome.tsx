import { onboarding } from "@/constants";
import "@/global.css";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      {/* Swiper */}
      <SwiperFlatList
        data={onboarding}
        showPagination
        paginationActiveColor="#0286FF"
        paginationDefaultColor="#E2E8F0"
        onChangeIndex={({ index }) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// import "@/global.css";
// import { Text, View } from "react-native";

// export default function Test() {
//   return (
//     <View className="flex-1 items-center justify-center bg-red-500">
//       <Text className="text-white text-3xl font-bold">Hello Tailwind</Text>
//     </View>
//   );
// }

export default OnBoarding;
