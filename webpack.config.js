const path = require(`path`)
const yargs = require('yargs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProduction = yargs.argv.p

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      '@lib': path.resolve(__dirname, 'src/lib/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction
                  ? '[hash:base64:5]'
                  : '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  externals: Object.entries({
    react: 'React',
    'react-dom': 'ReactDOM',
    'mobx': 'mobx',
    'mobx-react': 'mobxReact',
  }).reduce((o, [key, prop]) => { isProduction ? (o[key] = key) : (o[key] = prop); return o; }, {}),
  output: {
    library: 'GithubReposGrid',
    libraryTarget: 'umd',
    filename: 'index.js',
  },
}


