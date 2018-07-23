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
    object = _propTypes2.default.object;

/**
 * Seekable progress bar
 *
 * TODO: Make use of the range input element?
 */

var ProgressBar = (_class = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.progressBarEl = null;

    _this.state = {
      currentIntent: 0
    };
    return _this;
  }

  _createClass(ProgressBar, [{
    key: 'storeRef',
    value: function storeRef(rootEl) {
      this.progressBarEl = rootEl;
    }
  }, {
    key: 'handleSeek',
    value: function handleSeek(relativeTime) {
      var _props = this.props,
          isSeekable = _props.isSeekable,
          onSeek = _props.onSeek,
          totalTime = _props.totalTime;


      if (isSeekable) {
        onSeek(relativeTime * totalTime);
      }
    }
  }, {
    key: 'handleSeekStart',
    value: function handleSeekStart(relativeTime) {
      var _props2 = this.props,
          isSeekable = _props2.isSeekable,
          onSeekStart = _props2.onSeekStart,
          totalTime = _props2.totalTime;


      if (isSeekable) {
        onSeekStart(relativeTime * totalTime);
      }
    }
  }, {
    key: 'handleSeekEnd',
    value: function handleSeekEnd(relativeTime) {
      var _props3 = this.props,
          isSeekable = _props3.isSeekable,
          onSeekEnd = _props3.onSeekEnd,
          totalTime = _props3.totalTime;


      if (isSeekable) {
        onSeekEnd(relativeTime * totalTime);
      }
    }
  }, {
    key: 'handleIntent',
    value: function handleIntent(relativeTime) {
      var _props4 = this.props,
          isSeekable = _props4.isSeekable,
          onIntent = _props4.onIntent,
          totalTime = _props4.totalTime;

      var intent = isSeekable ? relativeTime : 0;

      this.setState(_extends({}, this.state, {
        currentIntent: intent
      }));

      if (isSeekable) {
        onIntent(relativeTime * totalTime);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props5 = this.props,
          totalTime = _props5.totalTime,
          currentTime = _props5.currentTime,
          bufferedTime = _props5.bufferedTime,
          isSeekable = _props5.isSeekable,
          className = _props5.className,
          extraClasses = _props5.extraClasses,
          childClasses = _props5.childClasses,
          style = _props5.style,
          childrenStyles = _props5.childrenStyles;
      var currentIntent = this.state.currentIntent;


      var progressPercent = Math.min(100, 100 * currentTime / totalTime);
      var styleLeft = progressPercent + '%';

      var isRewindIntent = currentIntent !== 0 && currentIntent < currentTime / totalTime;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, extraClasses, {
            isSeekable: isSeekable,
            isRewindIntent: isRewindIntent
          }),
          style: style,
          ref: this.storeRef
        },
        _react2.default.createElement('div', {
          className: childClasses.buffered || 'ProgressBar-buffered',
          style: _extends({ width: Math.min(100, 100 * bufferedTime / totalTime) + '%' }, childrenStyles.buffered || {})
        }),
        _react2.default.createElement('div', {
          className: childClasses.elapsed || 'ProgressBar-elapsed',
          style: _extends({ width: styleLeft }, childrenStyles.elapsed || {})
        }),
        _react2.default.createElement('div', {
          className: childClasses.intent || 'ProgressBar-intent',
          style: _extends({ width: currentIntent * 100 + '%' }, childrenStyles.intent || {})
        }),
        _react2.default.createElement('div', {
          className: childClasses.handle || 'ProgressBar-handle',
          style: _extends({ left: styleLeft }, childrenStyles.handle || {})
        }),
        isSeekable && _react2.default.createElement(_RangeControlOverlay2.default, {
          className: childClasses.seek || 'ProgressBar-seek',
          style: childrenStyles.RangeControlOverlay,
          bounds: function bounds() {
            return _this2.progressBarEl.getBoundingClientRect();
          },
          onValue: this.handleSeek,
          onChangeStart: this.handleSeekStart,
          onChangeEnd: this.handleSeekEnd,
          onIntent: this.handleIntent
        })
      );
    }
  }]);

  return ProgressBar;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'storeRef', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'storeRef'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSeek', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSeek'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSeekStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSeekStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSeekEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSeekEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleIntent', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleIntent'), _class.prototype)), _class);
ProgressBar.propTypes = {
  totalTime: number,
  currentTime: number,
  bufferedTime: number,
  isSeekable: bool,
  onSeek: func,
  onSeekStart: func,
  onSeekEnd: func,
  onIntent: func,
  style: object
};
ProgressBar.defaultProps = {
  totalTime: Infinity,
  currentTime: 0,
  bufferedTime: 0,
  isSeekable: false,
  onSeek: function onSeek() {},
  onSeekStart: function onSeekStart() {},
  onSeekEnd: function onSeekEnd() {},
  onIntent: function onIntent() {},
  style: {}
};
exports.default = (0, _composers.compose)((0, _composers.withChildrenStyles)(), (0, _composers.withCustomizableClasses)('ProgressBar'), (0, _composers.withChildClasses)())(ProgressBar);