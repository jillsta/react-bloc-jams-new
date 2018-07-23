'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChildClasses = exports.withCustomizableClasses = exports.withChildrenStyles = exports.compose = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.curry');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.flowright');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * For clarification
 */
var compose = exports.compose = _lodash4.default;

/**
 * Adds `childrenStyles` prop type and default prop to
 * a component
 */
var withChildrenStyles = exports.withChildrenStyles = (0, _lodash2.default)(function (Component) {
  Component.propTypes = _extends({}, Component.propTypes || {}, {
    childrenStyles: _propTypes2.default.object
  });

  Component.defaultProps = _extends({}, Component.defaultProps || {}, {
    childrenStyles: {}
  });

  return Component;
});

/**
 *
 */
var withCustomizableClasses = exports.withCustomizableClasses = (0, _lodash2.default)(function (defaultClassName, Component) {
  Component.propTypes = _extends({}, Component.propTypes || {}, {
    className: _propTypes2.default.string,
    extraClasses: _propTypes2.default.string
  });

  Component.defaultProps = _extends({}, Component.defaultProps || {}, {
    className: defaultClassName,
    extraClasses: ''
  });

  return Component;
});

/**
 * Adds a `childClasses` prop type definition together with an empty
 * defaults object to a provided component.
 */
var withChildClasses = exports.withChildClasses = (0, _lodash2.default)(function (Component) {
  Component.propTypes = _extends({}, Component.propTypes || {}, {
    childClasses: _propTypes2.default.object
  });

  Component.defaultProps = _extends({}, Component.defaultProps || {}, {
    childClasses: {}
  });

  return Component;
});