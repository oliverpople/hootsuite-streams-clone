'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForProps = waitForProps;

var _wait = require('./wait');

function waitForProps(wrapper, propsValidatorFn) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _wait.DEFAULT_CONFIG;

  return (0, _wait.wait)(wrapper, function (wrapper) {
    return propsValidatorFn(wrapper.instance().props);
  }, config);
}