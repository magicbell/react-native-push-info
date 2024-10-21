module.export = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-push-info': '../react-native-push-info',
        },
      },
    ],
  ],
};
