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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".reviews-wrapper {\\n  max-width: 800px;\\n  width: 100%;\\n  margin: 0 auto;\\n  margin-top: 60px;\\n}\\n.reviews-wrapper .mySwiper {\\n  margin: 0 auto;\\n  max-width: 800px;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.reviews-wrapper .mySwiper .review {\\n  position: relative;\\n  max-width: 800px;\\n  width: 100%;\\n  padding: 40px 0;\\n  overflow: hidden;\\n  background-color: rgba(64, 195, 164, 0.3294117647);\\n  border-radius: 20px;\\n  cursor: -webkit-grab;\\n  cursor: grab;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .quote-img {\\n  padding: 0 80px;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .review-main {\\n  padding: 0 80px;\\n  color: #2F2B2B;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .review-main .text {\\n  font-size: 16px;\\n  padding: 20px 0;\\n}\\n.reviews-wrapper .mySwiper .review .review-wrap .review-main .name {\\n  font-size: 18px;\\n}\\n\\n@media screen and (max-width: 840px) {\\n  .reviews-wrapper {\\n    max-width: 94%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/reviews.scss\"],\"names\":[],\"mappings\":\"AAKA;EACI,gBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;AAJJ;AAKI;EACI,cAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,mBAAA;EACA,uBAAA;AAJR;AAKQ;EACI,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,kDArBK;EAsBL,mBAAA;EACA,oBAAA;EAAA,YAAA;AAHZ;AAKgB;EACI,eAAA;AAHpB;AAKgB;EACI,eAAA;EACA,cAjCb;AA8BP;AAIoB;EACI,eAAA;EACA,eAAA;AAFxB;AAIoB;EACI,eAAA;AAFxB;;AAUA;EACI;IACI,cAAA;EAPN;AACF\",\"sourcesContent\":[\"$dark: #2F2B2B;\\r\\n$lightGray: #d9d9d9;\\r\\n$lightBlue: #40C3A4;\\r\\n$lightBlueHover: #40c3a454;\\r\\n\\r\\n.reviews-wrapper{\\r\\n    max-width: 800px;\\r\\n    width: 100%;\\r\\n    margin: 0 auto;\\r\\n    margin-top: 60px;\\r\\n    .mySwiper{\\r\\n        margin: 0 auto;\\r\\n        max-width: 800px;\\r\\n        width: 100%;\\r\\n        // max-width: 800px;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        justify-content: center;\\r\\n        .review{\\r\\n            position: relative;\\r\\n            max-width: 800px;\\r\\n            width: 100%;\\r\\n            padding: 40px 0;\\r\\n            overflow: hidden;\\r\\n            background-color: $lightBlueHover;\\r\\n            border-radius: 20px;\\r\\n            cursor: grab;\\r\\n            .review-wrap{\\r\\n                .quote-img{\\r\\n                    padding: 0 80px;\\r\\n                }\\r\\n                .review-main{\\r\\n                    padding: 0 80px;\\r\\n                    color: $dark;\\r\\n                    .text{\\r\\n                        font-size: 16px;\\r\\n                        padding: 20px 0;\\r\\n                    }\\r\\n                    .name{\\r\\n                        font-size: 18px;\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 840px){\\r\\n    .reviews-wrapper{\\r\\n        max-width: 94%;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbMTRdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzE0XS51c2VbNF0hLi9zdHlsZXMvcmV2aWV3cy5zY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSw0REFBNEQscUJBQXFCLGdCQUFnQixtQkFBbUIscUJBQXFCLEdBQUcsOEJBQThCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IsNEJBQTRCLEdBQUcsc0NBQXNDLHVCQUF1QixxQkFBcUIsZ0JBQWdCLG9CQUFvQixxQkFBcUIsdURBQXVELHdCQUF3Qix5QkFBeUIsaUJBQWlCLEdBQUcsOERBQThELG9CQUFvQixHQUFHLGdFQUFnRSxvQkFBb0IsbUJBQW1CLEdBQUcsc0VBQXNFLG9CQUFvQixvQkFBb0IsR0FBRyxzRUFBc0Usb0JBQW9CLEdBQUcsMENBQTBDLHNCQUFzQixxQkFBcUIsS0FBSyxHQUFHLE9BQU8sb0ZBQW9GLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLEtBQUssVUFBVSxLQUFLLHdDQUF3Qyx3QkFBd0Isd0JBQXdCLCtCQUErQix5QkFBeUIseUJBQXlCLG9CQUFvQix1QkFBdUIseUJBQXlCLGtCQUFrQiwyQkFBMkIsNkJBQTZCLHdCQUF3QixnQ0FBZ0MsMEJBQTBCLGdDQUFnQyxvQ0FBb0Msb0JBQW9CLG1DQUFtQyxpQ0FBaUMsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsa0RBQWtELG9DQUFvQyw2QkFBNkIsNkJBQTZCLCtCQUErQix3Q0FBd0MscUJBQXFCLGlDQUFpQyx3Q0FBd0MscUNBQXFDLDhCQUE4Qiw0Q0FBNEMsNENBQTRDLHlCQUF5Qiw4QkFBOEIsNENBQTRDLHlCQUF5QixxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLDZDQUE2Qyx5QkFBeUIsMkJBQTJCLFNBQVMsS0FBSyxtQkFBbUI7QUFDbjNGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Jldmlld3Muc2Nzcz8yYjY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmV2aWV3cy13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuLnJldmlld3Mtd3JhcHBlciAubXlTd2lwZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucmV2aWV3cy13cmFwcGVyIC5teVN3aXBlciAucmV2aWV3IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDQwcHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCAxOTUsIDE2NCwgMC4zMjk0MTE3NjQ3KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuLnJldmlld3Mtd3JhcHBlciAubXlTd2lwZXIgLnJldmlldyAucmV2aWV3LXdyYXAgLnF1b3RlLWltZyB7XFxuICBwYWRkaW5nOiAwIDgwcHg7XFxufVxcbi5yZXZpZXdzLXdyYXBwZXIgLm15U3dpcGVyIC5yZXZpZXcgLnJldmlldy13cmFwIC5yZXZpZXctbWFpbiB7XFxuICBwYWRkaW5nOiAwIDgwcHg7XFxuICBjb2xvcjogIzJGMkIyQjtcXG59XFxuLnJldmlld3Mtd3JhcHBlciAubXlTd2lwZXIgLnJldmlldyAucmV2aWV3LXdyYXAgLnJldmlldy1tYWluIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG59XFxuLnJldmlld3Mtd3JhcHBlciAubXlTd2lwZXIgLnJldmlldyAucmV2aWV3LXdyYXAgLnJldmlldy1tYWluIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIC5yZXZpZXdzLXdyYXBwZXIge1xcbiAgICBtYXgtd2lkdGg6IDk0JTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9yZXZpZXdzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQUtJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSlI7QUFLUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBckJLO0VBc0JMLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxZQUFBO0FBSFo7QUFLZ0I7RUFDSSxlQUFBO0FBSHBCO0FBS2dCO0VBQ0ksZUFBQTtFQUNBLGNBakNiO0FBOEJQO0FBSW9CO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFGeEI7QUFJb0I7RUFDSSxlQUFBO0FBRnhCOztBQVVBO0VBQ0k7SUFDSSxjQUFBO0VBUE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZGFyazogIzJGMkIyQjtcXHJcXG4kbGlnaHRHcmF5OiAjZDlkOWQ5O1xcclxcbiRsaWdodEJsdWU6ICM0MEMzQTQ7XFxyXFxuJGxpZ2h0Qmx1ZUhvdmVyOiAjNDBjM2E0NTQ7XFxyXFxuXFxyXFxuLnJldmlld3Mtd3JhcHBlcntcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICAubXlTd2lwZXJ7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIC8vIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgLnJldmlld3tcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbHVlSG92ZXI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IGdyYWI7XFxyXFxuICAgICAgICAgICAgLnJldmlldy13cmFwe1xcclxcbiAgICAgICAgICAgICAgICAucXVvdGUtaW1ne1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA4MHB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIC5yZXZpZXctbWFpbntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgODBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFyaztcXHJcXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAubmFtZXtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODQwcHgpe1xcclxcbiAgICAucmV2aWV3cy13cmFwcGVye1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5NCU7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[14].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[14].use[4]!./styles/reviews.scss\n"));

/***/ })

});