"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reviews",{

/***/ "./src/pages/reviews.tsx":
/*!*******************************!*\
  !*** ./src/pages/reviews.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Reviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/MainLayout */ \"./components/MainLayout.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\n\n\nvar __N_SSG = true;\nfunction Reviews(reviews) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_1__.MainLayout, {\n        desc: \"Отзывы\",\n        currentPage: \"reviews\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"reviews-wrapper\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 1,\n                spaceBetween: 20,\n                loop: true,\n                pagination: {\n                    clickable: true\n                },\n                navigation: true,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Pagination,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                className: \"mySwiper\",\n                children: reviews.reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        className: \"\".concat(review.person, \"-review review\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"review-wrap\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"quote-img\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"review-main\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: review.body\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 59\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"name\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: review.person\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 59\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: review.link,\n                                            children: \"Посмотреть оргинал\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 29\n                        }, this)\n                    }, review.id, false, {\n                        fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\projects\\\\web-app-next\\\\astra\\\\astra-web\\\\src\\\\pages\\\\reviews.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_c = Reviews;\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmV2aWV3cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDUjtBQUNPOztBQWtCekMsU0FBU0ssUUFBUUMsT0FBeUI7SUFDckQscUJBQ0ksOERBQUNOLDhEQUFVQTtRQUFDTyxNQUFLO1FBQVNDLGFBQVk7a0JBQ2xDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDVCxnREFBTUE7Z0JBQ0hVLGVBQWU7Z0JBQ2ZDLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05DLFlBQVk7b0JBQUNDLFdBQVc7Z0JBQUk7Z0JBQzVCQyxZQUFZO2dCQUNaQyxTQUFTO29CQUFDZCxzREFBVUE7b0JBQUVDLHNEQUFVQTtpQkFBQztnQkFDakNNLFdBQVU7MEJBRVRKLFFBQVFBLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDQyxDQUFBQSx1QkFDakIsOERBQUNqQixxREFBV0E7d0JBQWlCUSxXQUFXLEdBQWlCLE9BQWRTLE9BQU9DLE1BQU0sRUFBQztrQ0FDckQsNEVBQUNYOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0Q7b0NBQUlDLFdBQVU7Ozs7Ozs4Q0FHZiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNYLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBTyw0RUFBQ1c7MERBQUdGLE9BQU9HLElBQUk7Ozs7Ozs7Ozs7O3NEQUNyQyw4REFBQ2I7NENBQUlDLFdBQVU7c0RBQU8sNEVBQUNXOzBEQUFHRixPQUFPQyxNQUFNOzs7Ozs7Ozs7OztzREFDdkMsOERBQUNHOzRDQUFFQyxNQUFNTCxPQUFPTSxJQUFJO3NEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBUmhCTixPQUFPTyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbkQ7S0FoQ3dCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Jldmlld3MudHN4PzUyMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFpbkxheW91dCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHtTd2lwZXIsIFN3aXBlclNsaWRlfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XHJcbmltcG9ydCB7IE15UmV2aWV3cyB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL3Jldmlld3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL21vY2tpLmlvL3YxL2EwMTlmOTMxLWVmZWYtNGRiOC04OGE3LWNkODhkNjM1YTg2NCcpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gIFxyXG4gICAgcmV0dXJue1xyXG4gICAgICBwcm9wczoge3Jldmlld3M6IGRhdGF9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGludGVyZmFjZSBSZXZpZXdzUGFnZVByb3BzIHtcclxuICAgIHJldmlld3M6IE15UmV2aWV3c1tdXHJcbiAgfVxyXG4gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV2aWV3cyhyZXZpZXdzOiBSZXZpZXdzUGFnZVByb3BzKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPE1haW5MYXlvdXQgZGVzYz0n0J7RgtC30YvQstGLJyBjdXJyZW50UGFnZT1cInJldmlld3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxTd2lwZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e2NsaWNrYWJsZTogdHJ1ZX19XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVzPXtbUGFnaW5hdGlvbiwgTmF2aWdhdGlvbl19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXlTd2lwZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXZpZXdzLnJldmlld3MubWFwKHJldmlldyA9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17cmV2aWV3LmlkfSBjbGFzc05hbWU9e2Ake3Jldmlldy5wZXJzb259LXJldmlldyByZXZpZXdgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17ZGV2SW1nfSBhbHQ9J1wiJy8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LW1haW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+PHA+e3Jldmlldy5ib2R5fTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+PHA+e3Jldmlldy5wZXJzb259PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtyZXZpZXcubGlua30+0J/QvtGB0LzQvtGC0YDQtdGC0Ywg0L7RgNCz0LjQvdCw0Ls8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJNYWluTGF5b3V0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsIlJldmlld3MiLCJyZXZpZXdzIiwiZGVzYyIsImN1cnJlbnRQYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJtYXAiLCJyZXZpZXciLCJwZXJzb24iLCJwIiwiYm9keSIsImEiLCJocmVmIiwibGluayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/reviews.tsx\n"));

/***/ })

});