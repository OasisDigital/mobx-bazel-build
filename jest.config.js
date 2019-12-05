module.exports = {
    globals: {},
    modulePaths: ["node_modules", ".."],
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    testRegex: "test/base/.*\\.(t|j)sx?$",
    moduleFileExtensions: ["js", "jsx", "json"],
    testPathIgnorePatterns: ["/node_modules/", "/\\./"],
    watchPathIgnorePatterns: ["<rootDir>/node_modules/"]
}
