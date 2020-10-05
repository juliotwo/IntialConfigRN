const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            root: ["./src/"],
            alias: {
                _navigator: "./src/navigator",
                _modules: "./src/modules",
                _data: "./src/data",
                _store: "./src/store",
                _utils: "./src/utils",
                _assets: "./assets",
            },
        }

    ]

];
