const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Terser = require('terser');

const config = {
  target: 'web',
  entry: {
    SpyScroller: './src/SpyScroller.ts',
    AnimateCss: './src/Animation/Animate-css/AnimateCss.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].min.js',
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
        const folderName = getFolderName(chunk);
        return `styles/src/${folderName}/${folderName}.css`;
      },
      chunkFilename: ({ chunk }) => {
        const folderName = getFolderName(chunk);
        return folderName ? `js/${folderName}/[name].[contenthash].js` : 'js/[name].[contenthash].js';
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
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
    alias: {
      'breww-spyer': path.resolve(__dirname, 'node_modules/breww-spyer/dist/js/SpyScroller.js'),
      'breww-spyer/Animatecss': path.resolve(__dirname, 'node_modules/breww-spyer/dist/BrewwAnimations.ts'),
    },
    mainFields: ['browser', 'module', 'main'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console statements
          },
        },
        minify: ({ filename, code, map }) => {
          const extractedComments = [];
        
          // Custom logic to extract comments goes here
        
          const terserOptions = {
            compress: {
              drop_console: true,
            },
            format: {
              comments: false,
            },
            sourceMap: map,
          };
        
          if (filename && filename.includes('node_modules') && !filename.includes('my-module')) {
            // Exclude files in the 'node_modules' directory, except for 'my-module'
            return { code: '', map: '' };
          }
        
          const result = TerserPlugin.minify(code, terserOptions);
        
          // Custom logic to handle extracted comments goes here
        
          return {
            code: result.code,
            map: result.map,
          };
        },
        
      }),
    ],
  },
  
  
  output: {
    path: path.resolve(__dirname, './dist/esm'), // Set output path to './dist/esm' for ESM version
    filename: 'js/[name].esm.js', // Set filename to '[name].esm.js' for ESM version
    library: {
      name: '[name]',
      type: 'module',
      export: 'default',
    },
  },
};

function getFolderName(chunk) {
  return chunk.name ? chunk.name.split('/')[0] : null;
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    // * add some development rules here
  } else if (argv.mode === 'production') {
    config.output.filename = 'js/[name].min.js'; // Updated filename for minified JS chunks
    config.output.chunkFilename = 'js/[name].min.js'; // Updated filename for minified JS chunks
    config.output.libraryTarget = 'window'; // Set libraryTarget to 'window' to exclude chunks
    config.output.path = path.resolve(__dirname, './dist/browser'); // Set output path to './dist/browser' for browser script
  } else {
    throw new Error('Specify env');
  }

  return config;
};
