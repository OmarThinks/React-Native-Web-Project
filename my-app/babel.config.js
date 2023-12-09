module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-web",
      "expo-router/babel",
      [
        "module-resolver",
        {
          alias: {
            "^react-native$": "react-native-web",
          },
        },
      ],
    ],
  };
};
