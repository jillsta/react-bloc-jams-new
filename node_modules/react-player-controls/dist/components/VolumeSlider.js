'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _composers = require('../utils/composers.js');

var _RangeControlOverlay = require('./RangeControlOverlay.js');

var _RangeControlOverlay2 = _interopRequireDefault(_RangeControlOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var number = _propTypes2.default.number,
    bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    string = _propTypes2.default.string,
    object = _propTypes2.default.object,
    oneOf = _propTypes2.default.oneOf;

/**
 * Volume slider component
 */

var VolumeSlider = (_class = function (_Component) {
  _inherits(VolumeSlider, _Component);

  function VolumeSlider(props) {
    _classCallCheck(this, VolumeSlider);

    var _this = _possibleConstructorReturn(this, (VolumeSlider.__proto__ || Object.getPrototypeOf(VolumeSlider)).call(this, props));

    _this.sliderEl = null;

    _this.state = {
      currentIntent: 0
    };
    return _this;
  }

  _createClass(VolumeSlider, [{
    key: 'storeRef',
    value: function storeRef(rootEl) {
      this.sliderEl = rootEl;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      return this.sliderEl.getBoundingClientRect();
    }
  }, {
    key: 'handleVolumeChange',
    value: function handleVolumeChange(volume) {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          onVolumeChange = _props.onVolumeChange;


      if (isEnabled) {
        onVolumeChange(volume);
      }
    }
  }, {
    key: 'handleIntent',
    value: function handleIntent(volume) {
      var intent = this.props.isEnabled ? volume : 0;

      this.setState({
        currentIntent: intent
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          volume = _props2.volume,
          isEnabled = _props2.isEnabled,
          direction = _props2.direction,
          className = _props2.className,
          extraClasses = _props2.extraClasses,
          childClasses = _props2.childClasses,
          style = _props2.style,
          childrenStyles = _props2.childrenStyles;
      var currentIntent = this.state.currentIntent;


      var volumePercentage = Math.min(100, Math.max(0, volume * 100));
      var styleSize = volumePercentage + '%';

      var appliedIntent = isEnabled && currentIntent !== 0 ? currentIntent : 0;
      var isDecreaseIntent = appliedIntent && currentIntent < volume;

      var directionClass = direction === _RangeControlOverlay.ControlDirection.VERTICAL ? 'isVertical' : 'isHorizontal';

      var valueSizeProperty = direction === _RangeControlOverlay.ControlDirection.VERTICAL ? 'height' : 'width';

      var intentSizeProperty = direction === _RangeControlOverlay.ControlDirection.VERTICAL ? 'height' : 'width';

      var handleSizeProperty = direction === _RangeControlOverlay.ControlDirection.VERTICAL ? 'bottom' : 'left';

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, extraClasses, directionClass, {
            isEnabled: isEnabled,
            isDecreaseIntent: isDecreaseIntent
          }),
          style: style,
          ref: this.storeRef
        },
        _react2.default.createElement('div', {
          className: childClasses.value || 'VolumeSlider-value',
          style: _extends(_defineProperty({}, valueSizeProperty, styleSize), childrenStyles.value || {})
        }),
        _react2.default.createElement('div', {
          className: childClasses.intent || 'VolumeSlider-intent',
          style: _extends(_defineProperty({}, intentSizeProperty, appliedIntent * 100 + '%'), childrenStyles.intent || {})
        }),
        _react2.default.createElement('div', {
          className: childClasses.handle || 'VolumeSlider-handle',
          style: _extends(_defineProperty({}, handleSizeProperty, styleSize), childrenStyles.handle || {})
        }),
        isEnabled && _react2.default.createElement(_RangeControlOverlay2.default, {
          extraClasses: childClasses.seek || 'VolumeSlider-seek',
          style: childrenStyles.RangeControlOverlay,
          bounds: this.getBounds,
          direction: direction,
          onValue: this.handleVolumeChange,
          onIntent: this.handleIntent
        })
      );
    }
  }]);

  return VolumeSlider;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'storeRef', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'storeRef'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getBounds', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'getBounds'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleVolumeChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleVolumeChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleIntent', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleIntent'), _class.prototype)), _class);
VolumeSlider.propTypes = {
  volume: number,
  isEnabled: bool,
  onVolumeChange: func,
  direction: oneOf([_RangeControlOverlay.ControlDirection.HORIZONTAL, _RangeControlOverlay.ControlDirection.VERTICAL]),
  extraClasses: string,
  style: object
};
VolumeSlider.defaultProps = {
  volume: 0,
  isEnabled: false,
  onVolumeChange: function onVolumeChange() {},
  direction: _RangeControlOverlay.ControlDirection.VERTICAL,
  extraClasses: '',
  style: {}
};
exports.default = (0, _composers.compose)((0, _composers.withChildrenStyles)(), (0, _composers.withCustomizableClasses)('VolumeSlider'), (0, _composers.withChildClasses)())(VolumeSlider);