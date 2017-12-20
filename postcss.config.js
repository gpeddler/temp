module.exports = {
    plugins: [
        require('postcss-filter-gradient')({
            skipWarnings: true
        }),
        require('postcss-utilities'),
        require('postcss-pseudo-content-insert'),
        require('postcss-svg'),
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-cssnext')({
            browsers: [
                'last 4 versions',
                'ie >= 9'
            ],
            features: {
                autoprefixer: { remove: false },
                customProperties: {},
                customMedia: {}
            }
        })
    ]
};
