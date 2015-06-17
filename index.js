'use strict';

var loaderUtils = require('loader-utils');
var lwip = require('lwip');
var path = require('path');

module.exports = function(content) {
  this.cacheable && this.cacheable();
  if (!this.emitFile) {
    throw new Error('emitFile is required from module system');
  }
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);
  var resizeFactor = parseInt(query.resize, 10);
  var extension = path.extname(this.resourcePath).substr(1);
  lwip.open(content, extension, function(err, image) {
    if (err) {
      return callback(err);
    }
    image.scale(resizeFactor, resizeFactor, 'nearest-neighbor', function(err, scaled) {
      if (err) {
        return callback(err);
      }
      scaled.toBuffer(extension, function(err, buffer) {
        if (err) {
          return callback(err);
        }
        callback(null, buffer);
      })
    });
  });
};

// We want a buffer, not a string.
module.exports.raw = true;
