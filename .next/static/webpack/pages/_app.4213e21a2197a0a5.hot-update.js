"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./styles/reviews.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./styles/reviews.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".reviews-wrapper {\\n  max-width: 800px;\\n  width: 100%;\\n  margin: 0 auto;\\n  margin-top: 60px;\\n}\\n.reviews-wrapper .mySwiper {\\n  margin: 0 auto;\\n  max-width: 800px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.reviews-wrapper .mySwiper .review {\\n  position: relative;\\n  max-width: 800px;\\n  width: 100%;\\n  padding: 40px 0;\\n  overflow: hidden;\\n  background-color: rgba(64, 195, 164, 0.3294117647);\\n  border-radius: 20px;\\n  cursor: -webkit-grab;\\n  cursor: grab;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .review-main {\\n  padding: 0 80px;\\n  color: #2F2B2B;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .review-main .text {\\n  font-size: 16px;\\n  padding: 20px 0;\\n}\\n\\n@media screen and (max-width: 840px) {\\n  .reviews-wrapper {\\n    max-width: 94;\\n    width: 100%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/reviews.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,gBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;AAJJ;AAKI;EACI,cAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJR;AAKQ;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kDArBK;EAsBL,mBAAA;EACA,oBAAA;EAAA,YAAA;AAHZ;AAKgB;EACI,eAAA;EACA,cA9Bb;AA2BP;AAIoB;EACI,eAAA;EACA,eAAA;AAFxB;;AAUA;EACI;IACI,aAAA;IACA,WAAA;EAPN;AACF\",\"sourcesContent\":[\"$dark: #2F2B2B;\\r\\n$lightGray: #d9d9d9;\\r\\n$lightBlue: #40C3A4;\\r\\n$lightBlueHover: #40c3a454;\\r\\n\\r\\n.reviews-wrapper{\\r\\n    max-width: 800px;\\r\\n    width: 100%;\\r\\n    margin: 0 auto;\\r\\n    margin-top: 60px;\\r\\n    .mySwiper{\\r\\n        margin: 0 auto;\\r\\n        max-width: 800px;\\r\\n        width: 100%;\\r\\n        // max-width: 800px;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        .review{\\r\\n            position: relative;\\r\\n            max-width: 800px;\\r\\n            width: 100%;\\r\\n            padding: 40px 0;\\r\\n            overflow: hidden;\\r\\n            background-color: $lightBlueHover;\\r\\n            border-radius: 20px;\\r\\n            cursor: grab;\\r\\n            .review-wrap{\\r\\n                .review-main{\\r\\n                    padding: 0 80px;\\r\\n                    color: $dark;\\r\\n                    .text{\\r\\n                        font-size: 16px;\\r\\n                        padding: 20px 0;\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 840px){\\r\\n    .reviews-wrapper{\\r\\n        max-width: 94;\\r\\n        width: 100%;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbNF0hLi9zdHlsZXMvcmV2aWV3cy5zY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw0REFBNEQscUJBQXFCLGdCQUFnQixtQkFBbUIscUJBQXFCLEdBQUcsOEJBQThCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsc0NBQXNDLHVCQUF1QixxQkFBcUIsZ0JBQWdCLG9CQUFvQixxQkFBcUIsdURBQXVELHdCQUF3Qix5QkFBeUIsaUJBQWlCLEdBQUcsZ0VBQWdFLG9CQUFvQixtQkFBbUIsR0FBRyxzRUFBc0Usb0JBQW9CLG9CQUFvQixHQUFHLDBDQUEwQyxzQkFBc0Isb0JBQW9CLGtCQUFrQixLQUFLLEdBQUcsT0FBTyxvRkFBb0YsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyx3Q0FBd0Msd0JBQXdCLHdCQUF3QiwrQkFBK0IseUJBQXlCLHlCQUF5QixvQkFBb0IsdUJBQXVCLHlCQUF5QixrQkFBa0IsMkJBQTJCLDZCQUE2Qix3QkFBd0IsZ0NBQWdDLDBCQUEwQixnQ0FBZ0Msb0NBQW9DLG9CQUFvQixtQ0FBbUMsaUNBQWlDLDRCQUE0QixnQ0FBZ0MsaUNBQWlDLGtEQUFrRCxvQ0FBb0MsNkJBQTZCLDZCQUE2QixpQ0FBaUMsd0NBQXdDLHFDQUFxQyw4QkFBOEIsNENBQTRDLDRDQUE0Qyx5QkFBeUIscUJBQXFCLGlCQUFpQixhQUFhLFNBQVMsS0FBSyw2Q0FBNkMseUJBQXlCLDBCQUEwQix3QkFBd0IsU0FBUyxLQUFLLG1CQUFtQjtBQUN4Z0Y7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvcmV2aWV3cy5zY3NzPzJiNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5yZXZpZXdzLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbn1cXG4ucmV2aWV3cy13cmFwcGVyIC5teVN3aXBlciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yZXZpZXdzLXdyYXBwZXIgLm15U3dpcGVyIC5yZXZpZXcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNDBweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsIDE5NSwgMTY0LCAwLjMyOTQxMTc2NDcpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG4ucmV2aWV3cy13cmFwcGVyIC5teVN3aXBlciAucmV2aWV3IC5yZXZpZXctd3JhcCAucmV2aWV3LW1haW4ge1xcbiAgcGFkZGluZzogMCA4MHB4O1xcbiAgY29sb3I6ICMyRjJCMkI7XFxufVxcbi5yZXZpZXdzLXdyYXBwZXIgLm15U3dpcGVyIC5yZXZpZXcgLnJldmlldy13cmFwIC5yZXZpZXctbWFpbiAudGV4dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KSB7XFxuICAucmV2aWV3cy13cmFwcGVyIHtcXG4gICAgbWF4LXdpZHRoOiA5NDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvcmV2aWV3cy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSko7QUFLSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpSO0FBS1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQXJCSztFQXNCTCxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtBQUhaO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGNBOUJiO0FBMkJQO0FBSW9CO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFGeEI7O0FBVUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VBUE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFyazogIzJGMkIyQjtcXHJcXG4kbGlnaHRHcmF5OiAjZDlkOWQ5O1xcclxcbiRsaWdodEJsdWU6ICM0MEMzQTQ7XFxyXFxuJGxpZ2h0Qmx1ZUhvdmVyOiAjNDBjM2E0NTQ7XFxyXFxuXFxyXFxuLnJldmlld3Mtd3JhcHBlcntcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICAubXlTd2lwZXJ7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIC8vIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgLnJldmlld3tcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlSG92ZXI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IGdyYWI7XFxyXFxuICAgICAgICAgICAgLnJldmlldy13cmFwe1xcclxcbiAgICAgICAgICAgICAgICAucmV2aWV3LW1haW57XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDgwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRhcms7XFxyXFxuICAgICAgICAgICAgICAgICAgICAudGV4dHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0MHB4KXtcXHJcXG4gICAgLnJldmlld3Mtd3JhcHBlcntcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./styles/reviews.scss\n"));

/***/ })

});