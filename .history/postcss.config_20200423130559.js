const autoprefixer = require(`postcss-prefixer`);
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssBrowserReporter = require(`postcss-browser-reporter`)
const postcssReporter = require(`postcss-reporter`)

module.exports = () => ({
    plugins: [
        autoprefixer(),
        postcssPresetEnv(),
        postcssBrowserReporter(),
        postcssReporter(),
    ],
})