module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    watch: {

    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.handlebars$/, loader: "handlebars-loader" }
        ]
    }
};  