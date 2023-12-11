module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
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
    presets: ["babel-preset-expo"],
  };
};
