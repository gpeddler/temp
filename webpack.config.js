const join = require('path').join;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    },
    entry: join(__dirname, 'src/index.tsx'),
    output: {
        path: join(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        alias: {
            application: join(__dirname, 'src/')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: ['/node_modules/', '/static/'],
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: join(__dirname, 'tsconfig.json')
                        }
                    }
                ]
            },
            {
                test: /\.p?css$/,
                exclude: ['/node_modules/', '/static/'],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            module: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/resources',
                to: 'resources'
            }
        ])
    ]
};
