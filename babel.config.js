module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
  ],
  plugins: [
    [
      "module-resolver",
      {
        cwd: "babelrc",
        root: ["./src"],
        extensions: [".js", ".ios.js", ".android.js"],
        alias: {
          _navigator: "./src/navigator",
          _modules: "./src/modules",
          _data: "./src/data",
          _store: "./src/store",
          _utils: "./src/utils",
          _assets: "./assets",
        },
      },
    ],
  ],
};
