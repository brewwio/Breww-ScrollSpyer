const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  target: 'web',
  entry: {
    SpyScroller: './src/SpyScroller.ts',
    AnimateCss: './src/Animation/Animate-css/AnimateCss.ts',
  },
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: {
      name: '[name]',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this',
    umdNamedDefine: true,
  },
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist')],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /test/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // * add some development rules here
  } else if (argv.mode === 'production') {
    // * add some prod rules here
  } else {
    throw new Error('Specify env');
  }

  return config;
};
