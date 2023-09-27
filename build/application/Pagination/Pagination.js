import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _FontAwesomeIcon, _FontAwesomeIcon2;
var _excluded = ["type", "page", "selected"];
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { forwardRef } from 'react';
import Button from '../../Button';
import { usePagination } from '../../utils/usePagination';
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
import PaginationItem from './PaginationItem';
import { jsx as _jsx } from "react/jsx-runtime";
var Pagination = /*#__PURE__*/forwardRef(function Pagination(props, ref) {
  var count = props.count,
    onChange = props.onChange,
    initialPage = props.page;
  var _usePagination = usePagination({
      count: count,
      onChange: onChange,
      page: initialPage
    }),
    items = _usePagination.items;
  return /*#__PURE__*/_jsx("div", {
    className: styles.pagination,
    ref: ref,
    children: items.map(function (_ref, index) {
      var type = _ref.type,
        page = _ref.page,
        selected = _ref.selected,
        item = _objectWithoutProperties(_ref, _excluded);
      var children = null;
      if (type === 'start-ellipsis' || type === 'end-ellipsis') {
        children = '…';
      } else if (type === 'page') {
        children = /*#__PURE__*/_jsx(PaginationItem, _extends({}, item, {
          selected: selected,
          children: page
        }));
      } else {
        children = /*#__PURE__*/_jsx(Button, _extends({
          className: type === 'previous' ? styles['pagination--item-button-prev'] : styles['pagination--item-button-next'],
          variant: "link-gray",
          size: "sm"
        }, item, {
          prefixIcon: type === 'previous' ? _FontAwesomeIcon || (_FontAwesomeIcon = /*#__PURE__*/_jsx(FontAwesomeIcon, {
            icon: faArrowLeft
          })) : null,
          suffixIcon: type === 'next' ? _FontAwesomeIcon2 || (_FontAwesomeIcon2 = /*#__PURE__*/_jsx(FontAwesomeIcon, {
            icon: faArrowRight
          })) : null,
          children: "".concat(type.charAt(0).toUpperCase()).concat(type.slice(1, type.length))
        }));
      }
      return /*#__PURE__*/_jsx("li", {
        className: "".concat(styles['pagination--item-button'], " ").concat(
        // eslint-disable-next-line no-nested-ternary
        type === 'previous' ? styles['pagination--item-r-auto'] : type === 'next' ? styles['pagination--item-l-auto'] : ''),
        children: children
      }, index);
    })
  });
});
export default Pagination;