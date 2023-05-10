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
    filename: 'js/[name].js', // Updated filename to include chunk hash
    library: {
      name: '[name]',
      type: 'umd',
      export: 'default',
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
      filename: ({ chunk }) => {
        const folderName = path.basename(chunk.name);
        return `styles/${folderName}/${folderName}.css`;
      },
      chunkFilename: 'styles/chunks/[name]/[id].[chunkhash].css',
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
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: ({ chunk }) => {
          const folderName = path.basename(chunk.name);
          return `styles/${folderName}/${folderName}.[chunkhash].css`;
        },
        chunkFilename: 'styles/chunks/[name]/[id].[chunkhash].css',
      }),
    );
  } else {
    throw new Error('Specify env');
  }

  return config;
};
