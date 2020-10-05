module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _navigator: "./src/navigator",
          _modules: "./src/modules",
          _data: "./src/data",
          _store: "./src/store",
          _utils: "./src/utils",
          _assets: "./assets",
        },
      },
    },
  },
};
