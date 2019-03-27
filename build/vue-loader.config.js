module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCss: !isDev,
        cssModules: {
            localIdentName: '[local]_[hash:base64:8]',
            camelCase:true
        }
    }
}