module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _constants: './src/constants',
          _assets: './assets',
          _utils: './src/utils',
        },
      },
    ],
  ],
};
