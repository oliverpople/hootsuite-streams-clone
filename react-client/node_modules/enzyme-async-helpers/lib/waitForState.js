'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForState = waitForState;

var _wait = require('./wait');

function waitForState(wrapper, stateValidatorFn) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _wait.DEFAULT_CONFIG;

  return (0, _wait.wait)(wrapper, function (wrapper) {
    return stateValidatorFn(wrapper.instance().state);
  }, config);
}