import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef, useState } from 'react';
/**
 * Use resize observer to calculate what elements are visible and what hidden based on items and container positions/sizes.
 *
 * TODO: Currently observer only works if item is not hidden completly so DOMRECT can be calculated properly. Improve it.
 */
export var useCollapseNav = function useCollapseNav(_ref) {
  var containerRef = _ref.containerRef;
  var elements = useRef([]);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    hidden = _useState2[0],
    setHidden = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    ready = _useState4[0],
    setReady = _useState4[1];
  var registerItem = function registerItem(el, id, position) {
    if (el) {
      elements.current[position] = {
        id: id,
        domRect: el.getBoundingClientRect()
      };
    }
  };
  var checkIfVisible = function checkIfVisible(contentRect) {
    var hiddenItems = [];
    elements.current.forEach(function (item) {
      if (item.domRect.x + item.domRect.width > contentRect.x + contentRect.width - 60) {
        hiddenItems.push(item.id);
      }
    });
    setHidden(hiddenItems);
  };
  useEffect(function () {
    var observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        checkIfVisible(entry.target.getBoundingClientRect());
      });
    });
    if (containerRef.current && elements.current.length > 0) {
      observer.observe(containerRef.current);
      setReady(true);
    }
    return function () {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return {
    hidden: hidden,
    registerItem: registerItem,
    ready: ready
  };
};