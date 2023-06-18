const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
// const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// const ImageminMozjpeg = require('imagemin-mozjpeg');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            maxSize: 70000,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
            ],
        }),
        new GenerateSW({
            swDest: './sw.bundle.js',
            skipWaiting: true,
            clientsClaim: true,
            runtimeCaching: [
                {
                    // eslint-disable-next-line prefer-regex-literals
                    urlPattern: new RegExp('http://localhost:3001/'),
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'KeepMe',
                        cacheableResponse: {
                            statuses: [200],
                        },
                    },
                },
            ],
        }),
        // new ImageminWebpackPlugin({
        //     plugins: [
        //         ImageminMozjpeg({
        //             quality: 50,
        //             progressive: true,
        //         }),
        //     ],
        // }),
        // new BundleAnalyzerPlugin(),
    ],
};
