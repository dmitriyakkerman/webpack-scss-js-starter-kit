const miniCss = require("mini-css-extract-plugin");
const browserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        "main": ["./src/js/main.js", "./src/scss/main.scss"]
    },
    output: {
        path: __dirname + "/assets/js/",
        filename: "[name].min.js"
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    watch: true,
    plugins: [
        new miniCss({
            filename: "../css/[name].min.css"
        }),
        new browserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['*.html'],
            server: {
                baseDir: [__dirname]
            },
            // proxy: 'http://localhost:8000/', your custom serving endpoint
        })
    ]
};