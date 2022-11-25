const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
        mode,
        entry: "./src/index.tsx",
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "build"),
            filename: "bundled.js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
        ]
    }
};