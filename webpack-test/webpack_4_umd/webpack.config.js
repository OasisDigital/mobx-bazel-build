module.exports = {
    output: {
        filename: "bundle.js"
    },
    resolve: {
        mainFields: ["umd:main"]
    },
    target: "node",
    mode: "development"
}
