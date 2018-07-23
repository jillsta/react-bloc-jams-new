'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _composers = require('../utils/composers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _propTypes2.default.number,
    object = _propTypes2.default.object;


var padZero = function padZero(digit) {
  return '' + (digit < 10 ? '0' : '') + digit;
};

/**
 * Time formatter that turns seconds into h:mm:ss
 */

var FormattedTime = function (_Component) {
  _inherits(FormattedTime, _Component);

  function FormattedTime() {
    _classCallCheck(this, FormattedTime);

    return _possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).apply(this, arguments));
  }

  _createClass(FormattedTime, [{
    key: 'getFormattedTime',
    value: function getFormattedTime() {
      var numSeconds = this.props.numSeconds;


      var prefix = numSeconds < 0 ? '-' : '';
      var absNumSeconds = Math.abs(numSeconds);

      var hours = Math.floor(absNumSeconds / 3600);
      var minutes = Math.floor(absNumSeconds % 3600 / 60);
      var seconds = Math.floor(absNumSeconds) % 60;

      return hours > 0 ? '' + prefix + hours + ':' + padZero(minutes) + ':' + padZero(seconds) : '' + prefix + minutes + ':' + padZero(seconds);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          extraClasses = _props.extraClasses;


      return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(className, extraClasses), style: style },
        this.getFormattedTime()
      );
    }
  }]);

  return FormattedTime;
}(_react.Component);

FormattedTime.propTypes = {
  numSeconds: number,
  style: object
};
FormattedTime.defaultProps = {
  numSeconds: 0,
  style: {}
};
exports.default = (0, _composers.withCustomizableClasses)('FormattedTime', FormattedTime);