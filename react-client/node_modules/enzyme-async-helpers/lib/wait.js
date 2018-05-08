'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_CONFIG = undefined;
exports.wait = wait;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _prettyFormat = require('pretty-format');

var _prettyFormat2 = _interopRequireDefault(_prettyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _prettyFormat$plugins = _prettyFormat2.default.plugins,
    ReactElement = _prettyFormat$plugins.ReactElement,
    ReactTestComponent = _prettyFormat$plugins.ReactTestComponent;
var DEFAULT_CONFIG = exports.DEFAULT_CONFIG = {
  interval: 50,
  timeout: 2000,
  timeoutMessage: 'Timed out.',
  logStructureOnTimeout: true,
  logStructureOnSuccess: false
};

function printWrapper(wrapper, type, message) {
  if (console[type]) {
    var wrapperAsJson = (0, _enzymeToJson2.default)(wrapper, { noKey: true });
    console[type](message, (0, _prettyFormat2.default)(wrapperAsJson, {
      plugins: [ReactTestComponent, ReactElement],
      printFunctionName: true
    }));

    console[type]('As JSON:\n', wrapperAsJson);
  }
}

function wait(wrapper, validatorFn) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_CONFIG;

  var interval = config.interval || DEFAULT_CONFIG.interval;
  var timeout = config.timeout || DEFAULT_CONFIG.timeout;

  return new Promise(function (resolve, reject) {
    var retries = timeout / interval;

    var intervalInstance = void 0;

    intervalInstance = setInterval(function () {
      if (validatorFn(wrapper) === true) {
        clearInterval(intervalInstance);
        if (config.logStructureOnSuccess) {
          printWrapper(wrapper, 'log', 'The render tree at the time of success:\n');
        }
        resolve();
      } else {
        retries -= 1;

        if (retries < 0) {
          clearInterval(intervalInstance);

          if (config.logStructureOnTimeout) {
            printWrapper(wrapper, 'warn', 'The render tree at the time of timeout:\n');
          }

          reject(config.timeoutMessage || DEFAULT_CONFIG.timeoutMessage);
        }
      }
    }, interval);
  });
}