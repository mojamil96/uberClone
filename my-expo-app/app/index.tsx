import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
 
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>
        UberClone
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

