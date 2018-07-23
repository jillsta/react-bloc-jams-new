'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customComponentProp = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneOfType = _propTypes2.default.oneOfType,
    node = _propTypes2.default.node,
    element = _propTypes2.default.element,
    string = _propTypes2.default.string;

/**
 * Prop that specifies a component
 *
 * @type {Object}
 */

var customComponentProp = exports.customComponentProp = oneOfType([node, element, string]);