const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    mode: "development",
    devtool: 'source-map',
    context: path.resolve(__dirname, 'lib'),
    entry: './app.scss',
    module: {
        rules: [
            {
                test: /.(scss|css)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options: {
                                reloadAll:true
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css'
        })
    ]
}
