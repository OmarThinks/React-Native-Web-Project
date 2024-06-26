import React, { memo } from "react";
import { Platform, Text } from "react-native";

const PlatformText = memo(() => {
  let text = "";
  const platform = Platform.OS;

  switch (platform) {
    case "android":
      text = "Android";
      break;
    case "ios":
      text = "IOS";
      break;
    case "macos":
      text = "MacOS";
      break;
    case "web":
      text = "Web";
      break;
    case "windows":
      text = "Windows";
      break;
    default:
      const exhaustiveCheck: never = platform;
      throw new Error(`Unhandled color case: ${exhaustiveCheck}`);
  }

  return (
    <Text style={{ fontSize: 35 }}>
      Platform: <Text style={{ color: "green" }}>{text}</Text>
    </Text>
  );
});

export default PlatformText;
