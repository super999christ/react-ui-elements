import _extends from "@babel/runtime/helpers/esm/extends";
import React, { forwardRef } from 'react';
import Avatar from '../../Avatar';
import { jsx as _jsx } from "react/jsx-runtime";
export var PlayerAvatar = /*#__PURE__*/forwardRef(function PlayerAvatar(props, propRef) {
  return /*#__PURE__*/_jsx(Avatar, _extends({}, props, {
    ref: propRef,
    className: "border border-success-500"
  }));
});