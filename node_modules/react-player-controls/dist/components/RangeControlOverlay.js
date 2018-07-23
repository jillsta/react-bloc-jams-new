'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlDirection = undefined;

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

var oneOfType = _propTypes2.default.oneOfType,
    shape = _propTypes2.default.shape,
    func = _propTypes2.default.func,
    number = _propTypes2.default.number,
    oneOf = _propTypes2.default.oneOf,
    object = _propTypes2.default.object;

// Range control directions

var ControlDirection = exports.ControlDirection = {
  HORIZONTAL: 'HORIZONTAL',
  VERTICAL: 'VERTICAL'

  /**
   * An invisible overlay that acts as a range mouse control
   * within a specified bounds.
   */
};var RangeControlOverlay = (_class = function (_Component) {
  _inherits(RangeControlOverlay, _Component);

  function RangeControlOverlay(props) {
    _classCallCheck(this, RangeControlOverlay);

    var _this = _possibleConstructorReturn(this, (RangeControlOverlay.__proto__ || Object.getPrototypeOf(RangeControlOverlay)).call(this, props));

    _this.state = {
      isDragging: false
    };
    return _this;
  }

  _createClass(RangeControlOverlay, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.endDrag();
    }
  }, {
    key: 'startDrag',
    value: function startDrag(evt) {
      this.setState({ isDragging: true });
      window.addEventListener('mousemove', this.triggerRangeChange);
      window.addEventListener('mouseup', this.endDrag);

      this.toggleSelection('none');

      var startValue = evt ? this.getValueFromMouseEvent(evt) : null;
      this.props.onChangeStart(startValue);
    }
  }, {
    key: 'endDrag',
    value: function endDrag(evt) {
      if (evt) {
        this.triggerRangeChange(evt);
      }

      this.setState({ isDragging: false });
      window.removeEventListener('mousemove', this.triggerRangeChange);
      window.removeEventListener('mouseup', this.endDrag);

      this.toggleSelection('');

      var endValue = evt ? this.getValueFromMouseEvent(evt) : null;
      this.props.onChangeEnd(endValue);
    }
  }, {
    key: 'toggleSelection',
    value: function toggleSelection(value) {
      var body = document.getElementsByTagName('body')[0];
      body.style['user-select'] = value;
      body.style['-webkit-user-select'] = value;
      body.style['-moz-user-select'] = value;
      body.style['-ms-user-select'] = value;
    }
  }, {
    key: 'getValueFromMouseEvent',
    value: function getValueFromMouseEvent(mouseEvent) {
      return this.props.direction === ControlDirection.VERTICAL ? this.getVerticalValue(mouseEvent.pageY) : this.getHorizontalValue(mouseEvent.pageX);
    }
  }, {
    key: 'triggerRangeChange',
    value: function triggerRangeChange(mouseEvent) {
      this.props.onValue(this.getValueFromMouseEvent(mouseEvent));
    }
  }, {
    key: 'handleIntentMove',
    value: function handleIntentMove(evt) {
      if (!this.state.isDragging) {
        this.triggerIntent(evt);
      }
    }
  }, {
    key: 'triggerIntent',
    value: function triggerIntent(mouseEvent) {
      var _props = this.props,
          direction = _props.direction,
          onIntent = _props.onIntent;


      var value = direction === ControlDirection.VERTICAL ? this.getVerticalValue(mouseEvent.pageY) : this.getHorizontalValue(mouseEvent.pageX);

      onIntent(value);
    }
  }, {
    key: 'getRectFromBounds',
    value: function getRectFromBounds() {
      var bounds = this.props.bounds;


      return typeof bounds === 'function' ? bounds() : bounds;
    }
  }, {
    key: 'getHorizontalValue',
    value: function getHorizontalValue(mouseX) {
      var rect = this.getRectFromBounds();
      var scrollX = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
      var dLeft = mouseX - (rect.left + scrollX);
      dLeft = Math.max(dLeft, 0);
      dLeft = Math.min(dLeft, rect.width);

      return dLeft / rect.width;
    }
  }, {
    key: 'getVerticalValue',
    value: function getVerticalValue(mouseY) {
      var rect = this.getRectFromBounds();
      var scrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var dTop = mouseY - (rect.top + scrollY);
      dTop = Math.max(dTop, 0);
      dTop = Math.min(dTop, rect.height);

      return 1 - dTop / rect.height;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          extraClasses = _props2.extraClasses,
          style = _props2.style;
      var isDragging = this.state.isDragging;


      return _react2.default.createElement('div', {
        className: (0, _classnames2.default)(className, extraClasses, { isDragging: isDragging }),
        style: style,
        onMouseDown: this.startDrag,
        onMouseMove: this.handleIntentMove
      });
    }
  }]);

  return RangeControlOverlay;
}(_react.Component), (_applyDecoratedDescriptor(_class.prototype, 'startDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'startDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'endDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'endDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'triggerRangeChange', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'triggerRangeChange'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleIntentMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleIntentMove'), _class.prototype)), _class);
RangeControlOverlay.propTypes = {
  bounds: oneOfType([func, shape({
    width: number.isRequired,
    left: number.isRequired
  }), shape({
    height: number.isRequired,
    top: number.isRequired
  })]).isRequired,
  onValue: func.isRequired,
  onChangeStart: func,
  onChangeEnd: func,
  onIntent: func,
  direction: oneOf([ControlDirection.HORIZONTAL, ControlDirection.VERTICAL]),
  style: object
};
RangeControlOverlay.defaultProps = {
  onChangeStart: function onChangeStart() {},
  onChangeEnd: function onChangeEnd() {},
  onIntent: function onIntent() {},
  direction: ControlDirection.HORIZONTAL,
  style: {}
};
exports.default = (0, _composers.withCustomizableClasses)('RangeControlOverlay')(RangeControlOverlay);