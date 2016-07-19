/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-raf-measure',
  init: function() {
    if (this._super.init) { this._super.init.apply(this, arguments); }

    var assetsPath = require('path').join('raf-measure','dist','raf-measure.js');
    this.treePaths['vendor'] = require.resolve('raf-measure').replace(assetsPath, '');
  },
  included: function() {
    this.app.import('vendor/raf-measure/dist/raf-measure.js', {
      exports: {
        'raf-measure': [
          'default'
        ]
      }
    });
  }
};
