// api.cache(false);
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // 'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@fontSize': './src/utils/theme/fontSize',
          '@globalStyles': './src/utils/theme/globalStyles',
          '@layout': './src/utils/theme/layout',
          '@utils': './src/utils',
          '@responsiveDimensions': './src/utils/responsiveDimensions',
          '@schema': 'src/utils/schema',
          '@redux': './src/redux',
          '@types': './src/utils/types',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@asyncStore': './src/utils/constant/asyncStore',
        },
      },
    ],
  ],
};
