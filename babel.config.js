module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          test: './test',
          '@src': './src',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@style': './src/style',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@commonComponents': './src/commonComponents',
          '@otherComponent': './src/otherComponent',
          '@App': './App',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
