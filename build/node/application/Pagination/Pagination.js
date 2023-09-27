"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proLightSvgIcons = require("@fortawesome/pro-light-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../../Button"));
var _usePagination2 = require("../../utils/usePagination");
var _PaginationItem = _interopRequireDefault(require("./PaginationItem"));
var _jsxRuntime = require("react/jsx-runtime");
var _FontAwesomeIcon, _FontAwesomeIcon2;
var _excluded = ["type", "page", "selected"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var styles = {
  "pagination": "pbui-z1dk1",
  "pagination--item-button-prev": "pbui-8LwDc",
  "pagination--item-button-next": "pbui-DxHXA",
  "pagination--item-button": "pbui-QPYIh",
  "pagination--item-l-auto": "pbui-HhDTi",
  "pagination--item-r-auto": "pbui-jfR6F",
  "pagination--item": "pbui-HJFpq",
  "pagination--item-active": "pbui-27eAX"
};
var Pagination = /*#__PURE__*/(0, _react.forwardRef)(function Pagination(props, ref) {
  var count = props.count,
    onChange = props.onChange,
    initialPage = props.page;
  var _usePagination = (0, _usePagination2.usePagination)({
      count: count,
      onChange: onChange,
      page: initialPage
    }),
    items = _usePagination.items;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: styles.pagination,
    ref: ref,
    children: items.map(function (_ref, index) {
      var type = _ref.type,
        page = _ref.page,
        selected = _ref.selected,
        item = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
      var children = null;
      if (type === 'start-ellipsis' || type === 'end-ellipsis') {
        children = '…';
      } else if (type === 'page') {
        children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginationItem["default"], (0, _extends2["default"])({}, item, {
          selected: selected,
          children: page
        }));
      } else {
        children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], (0, _extends2["default"])({
          className: type === 'previous' ? styles['pagination--item-button-prev'] : styles['pagination--item-button-next'],
          variant: "link-gray",
          size: "sm"
        }, item, {
          prefixIcon: type === 'previous' ? _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _proLightSvgIcons.faArrowLeft
          })) : null,
          suffixIcon: type === 'next' ? _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactFontawesome.FontAwesomeIcon, {
            icon: _proLightSvgIcons.faArrowRight
          })) : null,
          children: "".concat(type.charAt(0).toUpperCase()).concat(type.slice(1, type.length))
        }));
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        className: "".concat(styles['pagination--item-button'], " ").concat(
        // eslint-disable-next-line no-nested-ternary
        type === 'previous' ? styles['pagination--item-r-auto'] : type === 'next' ? styles['pagination--item-l-auto'] : ''),
        children: children
      }, index);
    })
  });
});
var _default = exports["default"] = Pagination;