module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['.'],
      extensions: [
        '.ios.js',
        '.android.js',
        '.js',
        '.ios.jsx',
        '.android.jsx',
        '.jsx',
        '.js',
        '.json',
      ],
      'alias': {
        '@src': './src',
        '@actions': './src/actions',
        '@reducers': './src/reducers',
        '@helpers': './src/helpers',
        '@constants': './src/constants',
        '@components': './src/components',
        '@navigation': './src/navigation',
        '@screens': './src/screens',
        '@utils': './src/utils',
        '@assets': './src/assets',
        '@services': './src/services',
      },
    }],
  ],
};
