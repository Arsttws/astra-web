"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/counter.jsx":
/*!********************************!*\
  !*** ./components/counter.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ \"./node_modules/react-countup/build/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_scroll_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll-trigger */ \"./node_modules/react-scroll-trigger/es/index.js\");\n/* harmony import */ var _styles_counter_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/counter.module.scss */ \"./styles/counter.module.scss\");\n/* harmony import */ var _styles_counter_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_counter_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Counter() {\n    _s();\n    const [counterOn, setCounterOn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_trigger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onEnter: ()=>setCounterOn(true),\n        onExit: ()=>setCounterOn(false),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_counter_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counter),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    counterOn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_countup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        start: 0,\n                        end: 100,\n                        duration: 2,\n                        delay: 0\n                    }, void 0, false, {\n                        fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\components\\\\counter.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 36\n                    }, this),\n                    \" +\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\components\\\\counter.jsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\components\\\\counter.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\components\\\\counter.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(Counter, \"B3GPmEJHVDg5/e8MtOhBubozHsA=\");\n_c = Counter;\nvar _c;\n$RefreshReg$(_c, \"Counter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdW50ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ0g7QUFDZ0I7QUFFQztBQUVuQyxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLHFCQUVJLDhEQUFDQyw0REFBYUE7UUFBQ0ssU0FBUyxJQUFNRCxhQUFhO1FBQU9FLFFBQVEsSUFBTUYsYUFBYTtrQkFDekUsNEVBQUNHO1lBQUlDLFdBQVdQLDRFQUFjO3NCQUMxQiw0RUFBQ1M7O29CQUNLUCwyQkFBYSw4REFBQ0wscURBQU9BO3dCQUFDYSxPQUFPO3dCQUFJQyxLQUFLO3dCQUFLQyxVQUFVO3dCQUFHQyxPQUFPOzs7Ozs7b0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNGO0dBYndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvdW50ZXIuanN4P2I5ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvdW50VXAgZnJvbSAncmVhY3QtY291bnR1cCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2Nyb2xsVHJpZ2dlciBmcm9tICdyZWFjdC1zY3JvbGwtdHJpZ2dlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb3VudGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRlcigpe1xyXG4gICAgY29uc3QgW2NvdW50ZXJPbiwgc2V0Q291bnRlck9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICBcclxuICAgICAgICA8U2Nyb2xsVHJpZ2dlciBvbkVudGVyPXsoKSA9PiBzZXRDb3VudGVyT24odHJ1ZSl9IG9uRXhpdD17KCkgPT4gc2V0Q291bnRlck9uKGZhbHNlKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7IGNvdW50ZXJPbiAmJiA8Q291bnRVcCBzdGFydD17MH0gIGVuZD17MTAwfSBkdXJhdGlvbj17Mn0gZGVsYXk9ezB9Lz4gfSArXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2Nyb2xsVHJpZ2dlcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJDb3VudFVwIiwidXNlU3RhdGUiLCJTY3JvbGxUcmlnZ2VyIiwic3R5bGVzIiwiQ291bnRlciIsImNvdW50ZXJPbiIsInNldENvdW50ZXJPbiIsIm9uRW50ZXIiLCJvbkV4aXQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb3VudGVyIiwicCIsInN0YXJ0IiwiZW5kIiwiZHVyYXRpb24iLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/counter.jsx\n"));

/***/ })

});