"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/App.tsx":
/*!***********************!*\
  !*** ./pages/App.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useWindowSize */ "./pages/hooks/useWindowSize.tsx");
/* harmony import */ var _hooks_usePointers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/usePointers */ "./pages/hooks/usePointers.tsx");
/* harmony import */ var _PointerFeedbackGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PointerFeedbackGroup */ "./pages/PointerFeedbackGroup.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PointerFeedbackGroup__WEBPACK_IMPORTED_MODULE_4__]);
_PointerFeedbackGroup__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

var _jsxFileName = "D:\\dev\\apps\\choose\\pages\\App.tsx";





function App() {
  const size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__.default)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const pointers = (0,_hooks_usePointers__WEBPACK_IMPORTED_MODULE_3__.default)(ref);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    viewBox: `0 0 ${size.width} ${size.height}`,
    ref: ref,
    width: size.width,
    height: size.height,
    style: {
      backgroundColor: "#222222",
      touchAction: "none"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PointerFeedbackGroup__WEBPACK_IMPORTED_MODULE_4__.default, {
      pointers: pointers
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
});

/***/ }),

/***/ "./pages/PointerFeedback.tsx":
/*!***********************************!*\
  !*** ./pages/PointerFeedback.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\dev\\apps\\choose\\pages\\PointerFeedback.tsx";



const PointerFeedback = ({
  pointer,
  radius
}) => {
  const props = (0,react_spring__WEBPACK_IMPORTED_MODULE_2__.useSpring)({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1,
      stroke: "red",
      fill: "white",
      cx: pointer.x,
      cy: pointer.y
    },
    config: react_spring__WEBPACK_IMPORTED_MODULE_2__.config.stiff
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spring__WEBPACK_IMPORTED_MODULE_2__.animated.circle, {
    r: radius,
    style: props
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(PointerFeedback));

/***/ }),

/***/ "./pages/PointerFeedbackGroup.tsx":
/*!****************************************!*\
  !*** ./pages/PointerFeedbackGroup.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PointerFeedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointerFeedback */ "./pages/PointerFeedback.tsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_ease__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-ease */ "d3-ease");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([d3_ease__WEBPACK_IMPORTED_MODULE_4__]);
d3_ease__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

var _jsxFileName = "D:\\dev\\apps\\choose\\pages\\PointerFeedbackGroup.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function PointerFeedbackGroup({
  pointers
}) {
  const {
    0: isShrinking,
    1: setIsShrinking
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const toggleExpand = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setIsShrinking(lastExpand => !lastExpand);
  }, []); //@ts-ignore

  const {
    radius
  } = (0,react_spring__WEBPACK_IMPORTED_MODULE_3__.useSpring)({
    from: {
      radius: 45
    },
    to: {
      radius: 65
    },
    config: _objectSpread(_objectSpread({}, react_spring__WEBPACK_IMPORTED_MODULE_3__.config.default), {}, {
      easing: d3_ease__WEBPACK_IMPORTED_MODULE_4__.easeSinInOut
    }),
    reverse: isShrinking,
    onRest: toggleExpand
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
    children: pointers.map(pointer => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PointerFeedback__WEBPACK_IMPORTED_MODULE_2__.default, {
      pointer: pointer,
      radius: radius
    }, pointer.id, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(PointerFeedbackGroup));
});

/***/ }),

/***/ "./pages/hooks/usePointers.tsx":
/*!*************************************!*\
  !*** ./pages/hooks/usePointers.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);



const pointersReducer = (state, action) => {
  switch (action.type) {
    case "down":
      {
        return (0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)(state, draft => {
          draft[action.pointer.id] = action.pointer;
        });
      }

    case "move":
      {
        if (state[action.pointer.id]) return (0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)(state, draft => {
          draft[action.pointer.id] = action.pointer;
        });
        return state;
      }

    case "up":
      {
        return state.filter(pointer => pointer.id !== action.id);
      }
  }
};

const usePointers = ref => {
  const {
    0: pointers,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(pointersReducer, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleDown = e => {
      e.preventDefault();

      if (e instanceof PointerEvent) {
        dispatch({
          type: "down",
          pointer: {
            id: e.pointerId,
            x: e.clientX,
            y: e.clientY
          }
        });
      }
    };

    const handleMove = e => {
      e.preventDefault();

      if (e instanceof PointerEvent) {
        dispatch({
          type: "move",
          pointer: {
            id: e.pointerId,
            x: e.clientX,
            y: e.clientY
          }
        });
      }
    };

    const handleUp = e => {
      e.preventDefault();

      if (e instanceof PointerEvent) {
        dispatch({
          type: "up",
          id: e.pointerId
        });
      }
    };

    const handleDisableMenu = e => {
      e.preventDefault();
    };

    if (ref.current instanceof EventTarget) {
      ref.current.addEventListener("pointerdown", handleDown);
      ref.current.addEventListener("pointermove", handleMove);
      ref.current.addEventListener("pointerup", handleUp);
      ref.current.addEventListener("contextmenu", handleDisableMenu);
      return () => {
        if (ref.current instanceof EventTarget) {
          ref.current.removeEventListener("pointerdown", handleDown);
          ref.current.removeEventListener("pointermove", handleMove);
          ref.current.removeEventListener("pointerup", handleUp);
          ref.current.removeEventListener("contextmenu", handleDisableMenu);
        }
      };
    }
  }, [ref]);
  return pointers;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePointers);

/***/ }),

/***/ "./pages/hooks/useWindowSize.tsx":
/*!***************************************!*\
  !*** ./pages/hooks/useWindowSize.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWindowSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const {
    0: windowSize,
    1: setWindowSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./pages/App.tsx");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_App__WEBPACK_IMPORTED_MODULE_2__]);
_App__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

var _jsxFileName = "D:\\dev\\apps\\choose\\pages\\index.tsx";


function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 12
  }, this);
}
});

/***/ }),

/***/ "d3-ease":
/*!**************************!*\
  !*** external "d3-ease" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("d3-ease");;

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

module.exports = require("immer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-spring");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWxERDs7QUFvREEsaUVBQWVMLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFFZSxTQUFTRCxhQUFULEdBQXlCO0FBRXRDLFFBQU07QUFBQSxPQUFDa0UsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJ0QywrQ0FBUSxDQUFDO0FBQUN0QixJQUFBQSxLQUFLLEVBQUMsQ0FBUDtBQUFTQyxJQUFBQSxNQUFNLEVBQUM7QUFBaEIsR0FBRCxDQUE1QztBQUNBa0MsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsYUFBUzBCLFlBQVQsR0FBd0I7QUFDdEJELE1BQUFBLGFBQWEsQ0FBQztBQUNaNUQsUUFBQUEsS0FBSyxFQUFFOEQsTUFBTSxDQUFDQyxVQURGO0FBRVo5RCxRQUFBQSxNQUFNLEVBQUU2RCxNQUFNLENBQUNFO0FBRkgsT0FBRCxDQUFiO0FBSUQ7O0FBQ0RGLElBQUFBLE1BQU0sQ0FBQ0wsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NJLFlBQWxDO0FBQ0EsV0FBTyxNQUFNQyxNQUFNLENBQUNKLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRyxZQUFyQyxDQUFiO0FBQ0QsR0FUUSxFQVNOLEVBVE0sQ0FBVCxDQUhzQyxDQVk5Qjs7QUFDUixTQUFPRixVQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUNBO0FBRWUsU0FBU00sS0FBVCxHQUFnQjtBQUMzQixzQkFBTyw4REFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNMRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvb3NlLy4vcGFnZXMvQXBwLnRzeCIsIndlYnBhY2s6Ly9jaG9vc2UvLi9wYWdlcy9Qb2ludGVyRmVlZGJhY2sudHN4Iiwid2VicGFjazovL2Nob29zZS8uL3BhZ2VzL1BvaW50ZXJGZWVkYmFja0dyb3VwLnRzeCIsIndlYnBhY2s6Ly9jaG9vc2UvLi9wYWdlcy9ob29rcy91c2VQb2ludGVycy50c3giLCJ3ZWJwYWNrOi8vY2hvb3NlLy4vcGFnZXMvaG9va3MvdXNlV2luZG93U2l6ZS50c3giLCJ3ZWJwYWNrOi8vY2hvb3NlLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2Nob29zZS9leHRlcm5hbCBcImQzLWVhc2VcIiIsIndlYnBhY2s6Ly9jaG9vc2UvZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovL2Nob29zZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hvb3NlL2V4dGVybmFsIFwicmVhY3Qtc3ByaW5nXCIiLCJ3ZWJwYWNrOi8vY2hvb3NlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi9ob29rcy91c2VXaW5kb3dTaXplXCI7XHJcbmltcG9ydCB1c2VQb2ludGVycyBmcm9tIFwiLi9ob29rcy91c2VQb2ludGVyc1wiO1xyXG5pbXBvcnQgUG9pbnRlckZlZWRiYWNrR3JvdXAgZnJvbSBcIi4vUG9pbnRlckZlZWRiYWNrR3JvdXBcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxTVkdTVkdFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgcG9pbnRlcnMgPSB1c2VQb2ludGVycyhyZWYpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB2aWV3Qm94PXtgMCAwICR7c2l6ZS53aWR0aH0gJHtzaXplLmhlaWdodH1gfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgd2lkdGg9e3NpemUud2lkdGh9XHJcbiAgICAgIGhlaWdodD17c2l6ZS5oZWlnaHR9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMjIyMjJcIixcclxuICAgICAgICB0b3VjaEFjdGlvbjogXCJub25lXCJcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFBvaW50ZXJGZWVkYmFja0dyb3VwIHBvaW50ZXJzPXtwb2ludGVyc30gLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcblxyXG5pbXBvcnQgUG9pbnRlciBmcm9tIFwiLi90eXBlcy9Qb2ludGVyXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBvaW50ZXI6IFBvaW50ZXI7XHJcbiAgcmFkaXVzOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBQb2ludGVyRmVlZGJhY2sgPSAoeyBwb2ludGVyLCByYWRpdXMgfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7XHJcbiAgICBmcm9tOiB7IG9wYWNpdHk6IDAgfSxcclxuICAgIHRvOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHN0cm9rZTogXCJyZWRcIixcclxuICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxyXG4gICAgICBjeDogcG9pbnRlci54LFxyXG4gICAgICBjeTogcG9pbnRlci55XHJcbiAgICB9LFxyXG4gICAgY29uZmlnOiBjb25maWcuc3RpZmZcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxhbmltYXRlZC5jaXJjbGUgcj17cmFkaXVzfSBzdHlsZT17cHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQb2ludGVyRmVlZGJhY2spO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb2ludGVyIGZyb20gXCIuL3R5cGVzL1BvaW50ZXJcIjtcclxuaW1wb3J0IFBvaW50ZXJGZWVkYmFjayBmcm9tIFwiLi9Qb2ludGVyRmVlZGJhY2tcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBjb25maWcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XHJcbmltcG9ydCB7IGVhc2VTaW5Jbk91dCB9IGZyb20gXCJkMy1lYXNlXCI7XHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcG9pbnRlcnM6IFBvaW50ZXJbXTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBvaW50ZXJGZWVkYmFja0dyb3VwKHsgcG9pbnRlcnMgfTogUHJvcHMpIHtcclxuICBjb25zdCBbaXNTaHJpbmtpbmcsIHNldElzU2hyaW5raW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVFeHBhbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc1Nocmlua2luZyhsYXN0RXhwYW5kID0+ICFsYXN0RXhwYW5kKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHsgcmFkaXVzIH0gPSB1c2VTcHJpbmcoe1xyXG4gICAgZnJvbTogeyByYWRpdXM6IDQ1IH0sXHJcbiAgICB0bzogeyByYWRpdXM6IDY1IH0sXHJcbiAgICBjb25maWc6IHsgLi4uY29uZmlnLmRlZmF1bHQsIGVhc2luZzogZWFzZVNpbkluT3V0IH0sXHJcbiAgICByZXZlcnNlOiBpc1Nocmlua2luZyxcclxuICAgIG9uUmVzdDogdG9nZ2xlRXhwYW5kXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zz5cclxuICAgICAge3BvaW50ZXJzLm1hcChwb2ludGVyID0+IChcclxuICAgICAgICA8UG9pbnRlckZlZWRiYWNrIGtleT17cG9pbnRlci5pZH0gcG9pbnRlcj17cG9pbnRlcn0gcmFkaXVzPXtyYWRpdXN9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9nPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUG9pbnRlckZlZWRiYWNrR3JvdXApO1xyXG4iLCJpbXBvcnQgeyBSZWZPYmplY3QsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9pbnRlciBmcm9tIFwiLi4vdHlwZXMvUG9pbnRlclwiO1xyXG5pbXBvcnQgeyBwcm9kdWNlIH0gZnJvbSBcImltbWVyXCI7XHJcblxyXG5pbnRlcmZhY2UgUG9zaXRpb25BY3Rpb24ge1xyXG4gIHR5cGU6IFwibW92ZVwiIHwgXCJkb3duXCI7XHJcbiAgcG9pbnRlcjogUG9pbnRlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIElEQWN0aW9uIHtcclxuICB0eXBlOiBcInVwXCI7XHJcbiAgaWQ6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBBY3Rpb24gPSBQb3NpdGlvbkFjdGlvbiB8IElEQWN0aW9uO1xyXG50eXBlIFN0YXRlID0gUG9pbnRlcltdO1xyXG5cclxuY29uc3QgcG9pbnRlcnNSZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPFN0YXRlLCBBY3Rpb24+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiZG93blwiOiB7XHJcbiAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgZHJhZnRbYWN0aW9uLnBvaW50ZXIuaWRdID0gYWN0aW9uLnBvaW50ZXI7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIm1vdmVcIjoge1xyXG4gICAgICBpZiAoc3RhdGVbYWN0aW9uLnBvaW50ZXIuaWRdKVxyXG4gICAgICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCBkcmFmdCA9PiB7XHJcbiAgICAgICAgICBkcmFmdFthY3Rpb24ucG9pbnRlci5pZF0gPSBhY3Rpb24ucG9pbnRlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcInVwXCI6IHtcclxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcihwb2ludGVyID0+IHBvaW50ZXIuaWQgIT09IGFjdGlvbi5pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXNlUG9pbnRlcnMgPSAocmVmOiBSZWZPYmplY3Q8RXZlbnRUYXJnZXQgfCBudWxsPikgPT4ge1xyXG4gIGNvbnN0IFtwb2ludGVycywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihwb2ludGVyc1JlZHVjZXIsIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZURvd24gPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFwiZG93blwiLFxyXG4gICAgICAgICAgcG9pbnRlcjogeyBpZDogZS5wb2ludGVySWQsIHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZU1vdmUgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFwibW92ZVwiLFxyXG4gICAgICAgICAgcG9pbnRlcjogeyBpZDogZS5wb2ludGVySWQsIHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVVwID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwidXBcIiwgaWQ6IGUucG9pbnRlcklkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURpc2FibGVNZW51ID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHJlZi5jdXJyZW50IGluc3RhbmNlb2YgRXZlbnRUYXJnZXQpIHtcclxuICAgICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhhbmRsZURvd24pO1xyXG4gICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaGFuZGxlVXApO1xyXG4gICAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlRGlzYWJsZU1lbnUpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWYuY3VycmVudCBpbnN0YW5jZW9mIEV2ZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGFuZGxlRG93bik7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgaGFuZGxlTW92ZSk7XHJcbiAgICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsIGhhbmRsZVVwKTtcclxuICAgICAgICAgIHJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVEaXNhYmxlTWVudSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtyZWZdKTtcclxuXHJcbiAgcmV0dXJuIHBvaW50ZXJzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUG9pbnRlcnM7XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe3dpZHRoOjAsaGVpZ2h0OjB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKXtcclxuICAgIHJldHVybiA8QXBwLz5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gaW1wb3J0KFwiZDMtZWFzZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ByaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VXaW5kb3dTaXplIiwidXNlUG9pbnRlcnMiLCJQb2ludGVyRmVlZGJhY2tHcm91cCIsIkFwcCIsInNpemUiLCJyZWYiLCJwb2ludGVycyIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwidG91Y2hBY3Rpb24iLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsImNvbmZpZyIsIlBvaW50ZXJGZWVkYmFjayIsInBvaW50ZXIiLCJyYWRpdXMiLCJwcm9wcyIsImZyb20iLCJvcGFjaXR5IiwidG8iLCJzdHJva2UiLCJmaWxsIiwiY3giLCJ4IiwiY3kiLCJ5Iiwic3RpZmYiLCJtZW1vIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVhc2VTaW5Jbk91dCIsImlzU2hyaW5raW5nIiwic2V0SXNTaHJpbmtpbmciLCJ0b2dnbGVFeHBhbmQiLCJsYXN0RXhwYW5kIiwiZGVmYXVsdCIsImVhc2luZyIsInJldmVyc2UiLCJvblJlc3QiLCJtYXAiLCJpZCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJwcm9kdWNlIiwicG9pbnRlcnNSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZHJhZnQiLCJmaWx0ZXIiLCJkaXNwYXRjaCIsImhhbmRsZURvd24iLCJlIiwicHJldmVudERlZmF1bHQiLCJQb2ludGVyRXZlbnQiLCJwb2ludGVySWQiLCJjbGllbnRYIiwiY2xpZW50WSIsImhhbmRsZU1vdmUiLCJoYW5kbGVVcCIsImhhbmRsZURpc2FibGVNZW51IiwiY3VycmVudCIsIkV2ZW50VGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==