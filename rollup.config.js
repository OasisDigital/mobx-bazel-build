const resolvePlugin = require("@rollup/plugin-node-resolve")
const replacePlugin = require("@rollup/plugin-replace")

module.exports = {
    output: {
        name: "mobx",
        exports: "named",
        banner: "/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */"
    },
    plugins: [
        resolvePlugin(),
        replacePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    ]
}
