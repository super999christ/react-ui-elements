"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCard = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _clsx = _interopRequireDefault(require("clsx"));
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EventCardWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({
    className: "flex w-full cursor-pointer flex-col rounded-md bg-white shadow-md",
    ref: ref
  }, rest, {
    children: children
  }));
});
EventCardWrapper.displayName = 'EventCard';
var Image = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var image = props.image,
    className = props.className;
  var classes = (0, _clsx["default"])('relative', className, !className && 'h-24 md:h-44');
  var _React$useState = React.useState(typeof image === 'string' ? image : ''),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    imgSrc = _React$useState2[0],
    setImgSrc = _React$useState2[1];
  React.useEffect(function () {
    setImgSrc(typeof image === 'string' ? image : '');
  }, [image]);
  var fallbackSrc = 'https://images.pickleball.com/placeholder/pickleball.png';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: classes,
    ref: ref,
    children: typeof image === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: imgSrc,
      onError: function onError() {
        setImgSrc(fallbackSrc);
      },
      alt: "",
      className: "h-full w-full overflow-hidden object-contain"
    }) : image
  });
});
Image.displayName = 'EventCardImage';
var Content = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex flex-1 flex-col p-2",
    ref: ref,
    children: children
  });
});
Content.displayName = 'EventCardContent';
var Footer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    borderColorClass = props.borderColorClass;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _clsx["default"])('mt-auto flex flex-wrap items-center border-t  px-2 text-sm text-gray-700 md:flex-row', borderColorClass, !borderColorClass && 'border-gray-200'),
    ref: ref,
    children: children
  });
});
Footer.displayName = 'EventCardFooter';
var PlayerCount = function PlayerCount(_ref) {
  var children = _ref.children,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "my-2 inline-flex flex-1 items-center whitespace-nowrap",
    children: children || /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "text-xs md:text-base",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-semibold",
        children: count
      }), " Players"]
    })
  });
};
var PlayerProfileImages = function PlayerProfileImages(_ref2) {
  var images = _ref2.images;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "ml-2 flex md:ml-auto md:mt-0",
    children: images.map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "-ml-2 h-6 w-6 rounded-full bg-cover ring-2 ring-white",
        style: {
          backgroundImage: "url(".concat(item, ")")
        }
      }, item);
    })
  });
};
var EventCard = exports.EventCard = Object.assign(EventCardWrapper, {
  Image: Image,
  Content: Content,
  Footer: Footer,
  PlayerCount: PlayerCount,
  PlayerProfileImages: PlayerProfileImages
});