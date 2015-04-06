// Karma configuration
var path = require('path');

module.exports = function(config) {
  config.set({
    // ... normal karma configuration

    files: [
    // all files ending in "_test"
    'src/__tests__/*-test.js',
    'src/__tests__/**/*-test.js'
    // each file acts as entry point for the webpack configuration
    ],


    frameworks: ['mocha'],


    browsers: ['Chrome'],


    preprocessors: {
      // add webpack as preprocessor
      'src/__tests__/*-test.js': ['webpack'],
      'src/__tests__/**/*-test.js': ['webpack']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      output: {
        library: 'Flummox',
        libraryTarget: 'var'
      },

      //plugins: plugins,

      resolve: {
        extensions: ['', '.js']
      },

      module: {
        loaders: [
          { test: /\.js$/, loaders: ['babel-loader?stage=0&loose=all&optional=runtime'], exclude: /node_modules/ }
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-mocha'),
      require('karma-webpack')
    ]

  });
};
