'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _composers = require('../utils/composers.js');

var _SoundOnButton = require('./SoundOnButton.js');

var _SoundOnButton2 = _interopRequireDefault(_SoundOnButton);

var _SoundOffButton = require('./SoundOffButton.js');

var _SoundOffButton2 = _interopRequireDefault(_SoundOffButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * Mute toggle button
 */
var MuteToggleButton = (_class = function (_Component) {
  _inherits(MuteToggleButton, _Component);

  function MuteToggleButton() {
    _classCallCheck(this, MuteToggleButton);

    return _possibleConstructorReturn(this, (MuteToggleButton.__proto__ || Object.getPrototypeOf(MuteToggleButton)).apply(this, arguments));
  }

  _createClass(MuteToggleButton, [{
    key: 'handleMuteChange',
    value: function handleMuteChange(isMuted) {
      if (this.props.isEnabled) {
        this.props.onMuteChange(isMuted);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isMuted = _props.isMuted,
          isEnabled = _props.isEnabled,
          className = _props.className,
          extraClasses = _props.extraClasses,
          childClasses = _props.childClasses,
          style = _props.style,
          childrenStyles = _props.childrenStyles;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, extraClasses, { isMuted: isMuted, isEnabled: isEnabled }),
          style: style
        },
        isMuted ? _react2.default.createElement(_SoundOffButton2.default, {
          className: childClasses.SoundOffButton,
          style: childrenStyles.SoundOffButton,
          isEnabled: isEnabled,
          onClick: function onClick() {
            return _this2.handleMuteChange(false);
          }
        }) : _react2.default.createElement(_SoundOnButton2.default, {
          className: childClasses.SoundOnButton,
          style: childrenStyles.SoundOnButton,
          isEnabled: isEnabled,
          onClick: function onClick() {
            return _this2.handleMuteChange(true);
          }
        })
      );
    }
  }]);

  return MuteToggleButton;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMuteChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMuteChange'), _class.prototype)), _class);
MuteToggleButton.propTypes = {
  onMuteChange: _propTypes2.default.func.isRequired,
  isMuted: _propTypes2.default.bool,
  isEnabled: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  extraClasses: _propTypes2.default.string,
  style: _propTypes2.default.object
};
MuteToggleButton.defaultProps = {
  isMuted: false,
  isEnabled: true,
  className: 'MuteToggleButton',
  extraClasses: '',
  style: {}
};
exports.default = (0, _composers.withChildClasses)((0, _composers.withChildrenStyles)(MuteToggleButton));