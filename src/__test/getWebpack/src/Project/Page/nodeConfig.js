const PATH = require('path')
const decache = require('decache')

module.exports = {
    getWebpack() {
        const webpackPath = PATH.resolve(__dirname, './webpack.config.js')
        decache(webpackPath)
        return require(webpackPath)
    }
}