// next.config.js
const withTM = require('next-transpile-modules')(['country-list']); // pass the modules you would like to see transpiled

module.exports = withTM({future: {
        webpack5: true
    }});