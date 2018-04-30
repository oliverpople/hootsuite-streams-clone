'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForElement = waitForElement;

var _wait = require('./wait');

function waitForElement(wrapper, elementSelector) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _wait.DEFAULT_CONFIG;

  return (0, _wait.wait)(wrapper, function (wrapper) {
    wrapper.update();
    return wrapper.find(elementSelector).length > 0;
  }, config);
}