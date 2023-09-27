import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
import clsx from 'clsx';
import * as React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var EventCardWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_jsx("div", _extends({
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
  var classes = clsx('relative', className, !className && 'h-24 md:h-44');
  var _React$useState = React.useState(typeof image === 'string' ? image : ''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    imgSrc = _React$useState2[0],
    setImgSrc = _React$useState2[1];
  React.useEffect(function () {
    setImgSrc(typeof image === 'string' ? image : '');
  }, [image]);
  var fallbackSrc = 'https://images.pickleball.com/placeholder/pickleball.png';
  return /*#__PURE__*/_jsx("div", {
    className: classes,
    ref: ref,
    children: typeof image === 'string' ? /*#__PURE__*/_jsx("img", {
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
  return /*#__PURE__*/_jsx("div", {
    className: "flex flex-1 flex-col p-2",
    ref: ref,
    children: children
  });
});
Content.displayName = 'EventCardContent';
var Footer = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    borderColorClass = props.borderColorClass;
  return /*#__PURE__*/_jsx("div", {
    className: clsx('mt-auto flex flex-wrap items-center border-t  px-2 text-sm text-gray-700 md:flex-row', borderColorClass, !borderColorClass && 'border-gray-200'),
    ref: ref,
    children: children
  });
});
Footer.displayName = 'EventCardFooter';
var PlayerCount = function PlayerCount(_ref) {
  var children = _ref.children,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count;
  return /*#__PURE__*/_jsx("div", {
    className: "my-2 inline-flex flex-1 items-center whitespace-nowrap",
    children: children || /*#__PURE__*/_jsxs("p", {
      className: "text-xs md:text-base",
      children: [/*#__PURE__*/_jsx("span", {
        className: "font-semibold",
        children: count
      }), " Players"]
    })
  });
};
var PlayerProfileImages = function PlayerProfileImages(_ref2) {
  var images = _ref2.images;
  return /*#__PURE__*/_jsx("div", {
    className: "ml-2 flex md:ml-auto md:mt-0",
    children: images.map(function (item) {
      return /*#__PURE__*/_jsx("div", {
        className: "-ml-2 h-6 w-6 rounded-full bg-cover ring-2 ring-white",
        style: {
          backgroundImage: "url(".concat(item, ")")
        }
      }, item);
    })
  });
};
export var EventCard = Object.assign(EventCardWrapper, {
  Image: Image,
  Content: Content,
  Footer: Footer,
  PlayerCount: PlayerCount,
  PlayerProfileImages: PlayerProfileImages
});