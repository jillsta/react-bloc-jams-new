'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeMarkerType = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _collections = require('../utils/collections.js');

var _composers = require('../utils/composers.js');

var _FormattedTime = require('./FormattedTime.js');

var _FormattedTime2 = _interopRequireDefault(_FormattedTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _propTypes2.default.number,
    oneOf = _propTypes2.default.oneOf,
    string = _propTypes2.default.string,
    object = _propTypes2.default.object;

/**
 * Time marker types
 */

var TimeMarkerType = exports.TimeMarkerType = {
  ELAPSED: 'ELAPSED',
  REMAINING: 'REMAINING',
  REMAINING_NEGATIVE: 'REMAINING_NEGATIVE',
  DURATION: 'DURATION'

  /**
   * Composite component showing current and total time
   */
};
var TimeMarker = function (_Component) {
  _inherits(TimeMarker, _Component);

  function TimeMarker() {
    _classCallCheck(this, TimeMarker);

    return _possibleConstructorReturn(this, (TimeMarker.__proto__ || Object.getPrototypeOf(TimeMarker)).apply(this, arguments));
  }

  _createClass(TimeMarker, [{
    key: 'getSecondsForTimeWithMarkerType',
    value: function getSecondsForTimeWithMarkerType(markerType) {
      var _props = this.props,
          currentTime = _props.currentTime,
          totalTime = _props.totalTime;


      if (markerType === TimeMarkerType.DURATION) {
        return totalTime;
      } else if (markerType === TimeMarkerType.ELAPSED) {
        return currentTime;
      } else if (markerType === TimeMarkerType.REMAINING) {
        return totalTime - currentTime;
      } else if (markerType === TimeMarkerType.REMAINING_NEGATIVE) {
        return currentTime - totalTime;
      }

      return 0;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          firstMarkerType = _props2.firstMarkerType,
          secondMarkerType = _props2.secondMarkerType,
          markerSeparator = _props2.markerSeparator,
          className = _props2.className,
          extraClasses = _props2.extraClasses,
          childClasses = _props2.childClasses,
          style = _props2.style,
          childrenStyles = _props2.childrenStyles;


      var seconds1 = this.getSecondsForTimeWithMarkerType(firstMarkerType);
      var seconds2 = this.getSecondsForTimeWithMarkerType(secondMarkerType);

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(className, extraClasses),
          style: style
        },
        _react2.default.createElement(_FormattedTime2.default, {
          numSeconds: seconds1,
          extraClasses: (0, _classnames2.default)('TimeMarker-firstMarker', childClasses.firstMarker),
          style: childrenStyles.firstMarker
        }),
        markerSeparator && _react2.default.createElement(
          'span',
          {
            className: (0, _classnames2.default)('TimeMarker-separator', childClasses.separator),
            style: childrenStyles.separator
          },
          markerSeparator
        ),
        _react2.default.createElement(_FormattedTime2.default, {
          numSeconds: seconds2,
          extraClasses: (0, _classnames2.default)('TimeMarker-secondMarker', childClasses.secondMarker),
          style: childrenStyles.secondMarker
        })
      );
    }
  }]);

  return TimeMarker;
}(_react.Component);

TimeMarker.propTypes = {
  totalTime: number,
  currentTime: number,
  firstMarkerType: oneOf((0, _collections.values)(TimeMarkerType)),
  secondMarkerType: oneOf((0, _collections.values)(TimeMarkerType)),
  markerSeparator: string,
  style: object
};
TimeMarker.defaultProps = {
  totalTime: Infinity,
  currentTime: 0,
  firstMarkerType: TimeMarkerType.ELAPSED,
  secondMarkerType: TimeMarkerType.DURATION,
  markerSeparator: null,
  style: {}
};
exports.default = (0, _composers.compose)((0, _composers.withChildrenStyles)(), (0, _composers.withCustomizableClasses)('TimeMarker'), (0, _composers.withChildClasses)())(TimeMarker);