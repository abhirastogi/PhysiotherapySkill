const $ = require('./helpers');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    'physiotherapy-function': $.root('./src/physiotherapy-function/physiotherapy-function.ts')
  },
  output: {
    path: $.root('dist'),
    filename: '[name]/[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: [/\.(spec|e2e)\.ts$/]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      'node_modules',
      'src'
    ]
  },
  plugins: [
    // new uglifyJSPlugin({
    //   uglifyOptions: {
    //     ecma: 6
    //   }
    // }),
    new copyWebpackPlugin([
      {
        from: 'src/host.json',
        to: 'host.json'
      },
      {
        context: 'src',
        from: '**/function.json',
        to: ''
      }
    ])
  ],
  node: {
    __filename: false,
    __dirname: false,
  }
};