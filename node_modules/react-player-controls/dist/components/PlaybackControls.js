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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _composers = require('../utils/composers.js');

var _PlayButton = require('./PlayButton.js');

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _PauseButton = require('./PauseButton.js');

var _PauseButton2 = _interopRequireDefault(_PauseButton);

var _PrevButton = require('./PrevButton.js');

var _PrevButton2 = _interopRequireDefault(_PrevButton);

var _NextButton = require('./NextButton.js');

var _NextButton2 = _interopRequireDefault(_NextButton);

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

var bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    object = _propTypes2.default.object;


var noop = function noop() {};

/**
 * Play and pause controls
 */
var PlaybackControls = (_class = function (_Component) {
  _inherits(PlaybackControls, _Component);

  function PlaybackControls() {
    _classCallCheck(this, PlaybackControls);

    return _possibleConstructorReturn(this, (PlaybackControls.__proto__ || Object.getPrototypeOf(PlaybackControls)).apply(this, arguments));
  }

  _createClass(PlaybackControls, [{
    key: 'handlePlay',
    value: function handlePlay() {
      if (this.props.isPlayable) {
        this.props.onPlaybackChange(true);
      }
    }
  }, {
    key: 'handlePause',
    value: function handlePause() {
      this.props.onPlaybackChange(false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isPlayable = _props.isPlayable,
          isPlaying = _props.isPlaying,
          showPrevious = _props.showPrevious,
          hasPrevious = _props.hasPrevious,
          onPrevious = _props.onPrevious,
          showNext = _props.showNext,
          hasNext = _props.hasNext,
          onNext = _props.onNext,
          className = _props.className,
          extraClasses = _props.extraClasses,
          childClasses = _props.childClasses,
          style = _props.style,
          childrenStyles = _props.childrenStyles;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, { isPlayable: isPlayable, isPlaying: isPlaying }, extraClasses),
          style: style
        },
        showPrevious && _react2.default.createElement(_PrevButton2.default, {
          isEnabled: hasPrevious,
          onClick: onPrevious,
          className: childClasses.PrevButton,
          style: childrenStyles.PrevButton
        }),
        isPlaying && isPlayable ? _react2.default.createElement(_PauseButton2.default, {
          onClick: this.handlePause,
          className: childClasses.PauseButton,
          style: childrenStyles.PauseButton
        }) : _react2.default.createElement(_PlayButton2.default, {
          isEnabled: isPlayable,
          onClick: this.handlePlay,
          className: childClasses.PlayButton,
          style: childrenStyles.PlayButton
        }),
        showNext && _react2.default.createElement(_NextButton2.default, {
          isEnabled: hasNext,
          onClick: onNext,
          className: childClasses.NextButton,
          style: childrenStyles.NextButton
        })
      );
    }
  }]);

  return PlaybackControls;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'handlePlay', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handlePlay'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handlePause', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handlePause'), _class.prototype)), _class);
PlaybackControls.propTypes = {
  onPlaybackChange: func.isRequired,
  isPlayable: bool,
  isPlaying: bool,
  showPrevious: bool,
  hasPrevious: bool,
  onPrevious: func,
  showNext: bool,
  hasNext: bool,
  onNext: func,
  style: object
};
PlaybackControls.defaultProps = {
  isPlayable: false,
  isPlaying: false,
  showPrevious: true,
  hasPrevious: false,
  onPrevious: noop,
  showNext: true,
  hasNext: false,
  onNext: noop,
  style: {}
};
exports.default = (0, _composers.compose)((0, _composers.withChildrenStyles)(), (0, _composers.withCustomizableClasses)('PlaybackControls'), (0, _composers.withChildClasses)())(PlaybackControls);