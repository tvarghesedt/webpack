var webpack = require('webpack');
module.exports = {
entry: {
app: './app.js'
},
output: {
filename: 'app.bundle.js'
},
// ,
//     module: {
//         loaders: [
//             { test: /jquery[\\\/]src[\\\/]selector\.js$/, loader: 'amd-define-factory-patcher-loader' }
//         ]
//     }
plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};