const webpack = require('webpack');
const path = require('path');

module.exports = function (env = {}) {
  const filename = env.mode === 'production' ? 'main.min.js' : 'main.js';
  const plugins = [];

  return {
    mode: env.mode || 'none',
    entry: './src/序.wy',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename,
      publicPath: '/js/',
      // library: ['GlRenderer'],
      // libraryTarget: 'umd',
      // libraryExport: 'default',
      // globalObject: 'this',
    },
    // resolve: {
    //
    // },

    module: {
      rules: [
        {
          test: /\.wy$/,
          use: [
            {
              loader: '@wenyanlang/loader',
              options: {
                // options of wenyan.compile
                strict: true,
                romanizeIdentifiers: 'pinyin',
                // ...etc
              }
            }
          ]
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals: {

    },
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || '.'),
      compress: true,
      port: 3000,
      hot: true,
      // ...
    },

    plugins,
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
