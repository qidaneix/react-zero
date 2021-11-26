const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
}