import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 70 }}>Home</Text>
    </View>
  );
}
