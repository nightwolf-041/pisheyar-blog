module.exports = () => ({
    plugins: [
        postcssImport(),
        postcssCssNext(),
        postcssBrowserReporter(),
        postcssReporter(),
    ],
})