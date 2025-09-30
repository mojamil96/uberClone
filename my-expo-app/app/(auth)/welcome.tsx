import CustomButton from "@/components/customButton";
import { onboarding } from "@/constants";
import "@/global.css";
import { router } from "expo-router";
import { useRef, useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SwiperFlatList, SwiperFlatListRef } from 'react-native-swiper-flatlist';


const { width } = Dimensions.get('window'); // Get screen width

const OnBoarding = () => {
  const swiperRef = useRef<SwiperFlatListRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlied = activeIndex === onboarding.length - 1;
  

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      
      {/* 1. SKIP BUTTON AREA */}
      <View className="w-full flex-row justify-end px-5 pt-3">
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/sign-up");
          }}
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </TouchableOpacity>
      </View>
      <SwiperFlatList
        // flex-1 is essential here to take the remaining height
        // className="flex-1"
        ref={swiperRef}
        data={onboarding}
        showPagination
        paginationActiveColor="#0286FF"
        paginationDefaultColor="#E2E8F0"
        onChangeIndex={({ index }) => setActiveIndex(index)}
        renderItem={({ item }) => (
          // Swiper Item Container: CRITICAL - Set width to screen width and use flex-1 for height
          <View 
            key={item.id} 
            style={{ width }} // Use dynamic screen width
            className="flex-1 items-center justify-center px-5" // p-5 provides side padding
          >
            {/* Image (Container flex-1 to push text down, or fixed height) */}
            <Image
              source={item.image}
              className="w-full h-[40%]" // Use a percentage height relative to the view
              resizeMode="contain"
            />
            {/* Text Content Area */}
            <View className="mt-10 items-center">
              {/* Title */}
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
              {/* Description */}
              <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3 px-5">
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
      
      {/* Custom Button */}
      <CustomButton title={ isLastSlied ? "Get Started" : "Next"}
      onPress={() => 
        isLastSlied ? router.replace("/(auth)/sign-up") : 
        swiperRef.current?.scrollToIndex({index: 1})}
        // : swiperRef.current?.scrollToIndex(1);// Use false if you don't want the animation);
      className="w-11/12 mt-10"/>
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
