import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={[styles.container, { backgroundColor: "green" }]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View
        style={{ width: 30, height: 30, backgroundColor: "red" }}
        onPointerEnter={() => {
          console.log("I'm in");
        }}
        onPointerLeave={() => {
          console.log("I am out");
        }}
      />
      <Button title="hey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
