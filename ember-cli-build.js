/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app'),
    BroccoliSass = require('broccoli-sass'),
    mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
        vendorNpmFiles: [
          'material-design-lite/material.js'
        ]
      }),
      cssTree = new BroccoliSass(['src/app', 'node_modules/material-design-lite/src'], './styles.sass', 'styles.css');

  return mergeTrees([
    app.toTree(),
    cssTree
  ]);
};
