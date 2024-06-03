import PlatformText from "@/components/PlatformText";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      }}
    >
      <Text style={{ fontSize: 70 }}>Home</Text>
      <PlatformText />
    </View>
  );
}
