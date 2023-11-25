module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./app'],
          alias: {
            '*': './app',
            'assets/*': './app/assets/*',
            'components/*': './app/components/*',
            'config/*': './app/configs/*',
            constants: './app/constants/*',
            'containers/*': './app/containers/*',
            'localization/*': './app/localization/*',
            'navigation/*': './app/navigation/*',
            'services/*': './app/services/*',
            'redux/*': './app/redux/*',
            'theme/*': './app/theme/*',
            'utils/*': './app/utils/*',
            test: 'test/*',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      [
        require.resolve('babel-plugin-inline-import'),
        {
          extensions: ['.svg'],
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
