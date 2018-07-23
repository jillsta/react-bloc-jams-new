'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button2 = require('./Button.js');

var _Button3 = _interopRequireDefault(_Button2);

var _icons = require('./icons.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Sound on button
 */
var SoundOnButton = function (_Button) {
  _inherits(SoundOnButton, _Button);

  function SoundOnButton() {
    _classCallCheck(this, SoundOnButton);

    return _possibleConstructorReturn(this, (SoundOnButton.__proto__ || Object.getPrototypeOf(SoundOnButton)).apply(this, arguments));
  }

  return SoundOnButton;
}(_Button3.default);

SoundOnButton.defaultProps = _extends({}, _Button3.default.defaultProps, {
  className: 'SoundOnButton',
  children: _react2.default.createElement(_icons.SoundOnIcon, null)
});
exports.default = SoundOnButton;