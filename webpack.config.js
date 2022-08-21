const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './Source/App/AppLoader.js',
  output: {
    path: __dirname + '/public/webpack',
    filename: 'bundle.js'
  },
  stats: {
    assets: true,
    assetsSort: 'field',
    colors: true,
    modules: false,
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }]
              ]
          },
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}